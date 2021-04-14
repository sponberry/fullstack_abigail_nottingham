import React, { useState } from "react"
import phonebook from "../services/numbers"

const AddForm = ({ persons, setPersons, setMessageConfig }) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
    const resetMsg = () => 
    setTimeout(() => {
      setMessageConfig(false)
    }, 5000)

    const successMsg = () => {
      setMessageConfig([
        `Success! ${newName} has been successfully added to the phonebook`,
        "green"
      ])
      resetMsg()
    }
    const failMsg = (message) => {
      setMessageConfig([
        `${message.error}`,
        "red"
      ])
      resetMsg()
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const currentEntry = persons.find(element => element.name.toLowerCase() === newName.toLowerCase())
      if (currentEntry) {
        let confirmed = window.confirm(`${newName} is already an entry in the phonebook, replace number?`)
        if (confirmed) {
          phonebook.update({...currentEntry, number: newNumber}, currentEntry.id)
          .then(updated => {
            setPersons(persons.map(p => p.id !== updated.id ? p : updated))
            successMsg()
          })
          .catch(error => {
            failMsg(error.response.data)
          })
        }
      } else {
        phonebook.addNumber({name: newName, number: newNumber})
        .then(updatedData => {
          setPersons(persons.concat(updatedData))
          successMsg()
        })
        .catch(error => {
          failMsg(error.response.data)
        })
      }
      setNewName("")
      setNewNumber("")
    }
  
    return (
      <form onSubmit={handleSubmit}>
          <div>
            name: 
            <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          </div>
          <div>
            number:
            <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

  export default AddForm