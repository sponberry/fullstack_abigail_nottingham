/// <reference types="cypress" />

describe("Note app", function() {
  beforeEach(function() {
    cy.request("POST", "http://localhost:3001/api/testing/reset")
    const user = {
      name: "Matti Luukkainen",
      username: "mluukkai",
      password: "sekret"
    }
    cy.request("POST", "http://localhost:3001/api/users/", user)
    cy.visit("http://localhost:3000")
  })

  it("front page can be opened", function() {
    cy.contains("Notes")
    cy.contains("This is a fake note")
  })

  it("user can log in", function() {
    cy.contains("login").click()
    cy.get("#usernameInput").type("mluukkai")
    cy.get("#passwordInput").type("sekret")
    cy.get("#loginButton").click()

    cy.contains("Matti Luukkainen logged in")
  })

  describe("when logged in", function() {
    beforeEach(function() {
      cy.login({ username: "mluukkai", password: "sekret" })
    })

    it("a new note can be created", function() {
      cy.createNote({
        content: "a note created by cypress",
        important: false
      })
    })

    describe("and a note exists", function() {
      beforeEach(function() {
        cy.createNote({
          content: "another cypress note",
          important: false
        })
      })

      it("it can be made important", function() {
        cy.contains("another cypress note")
          .contains("make important")
          .click()

        cy.contains("another cypress note")
          .contains("make not important")
      })
    })

    describe("and several notes exists", function() {
      beforeEach(function() {
        cy.createNote({ content: "first note", important: false })
        cy.createNote({ content: "second note", important: false })
        cy.createNote({ content: "third note", important: false })
      })

      it("one of those can be made important", function() {
        cy.contains("second note")
          .contains("make important")
          .click()

        cy.contains("second note")
          .contains("make not important")
      })
    })
  })

  it("login fails with incorrect password", function() {
    cy.contains("login").click()
    cy.get("#usernameInput").type("mluukkai")
    cy.get("#passwordInput").type("wrong")
    cy.get("#loginButton").click()

    cy.get(".error")
      .should("contain", "Wrong credentials")
      .and("have.css", "color", "rgb(255, 0, 0)")

    cy.get("html").should("not.contain", "Matti Luukkainen logged in")
  })

})