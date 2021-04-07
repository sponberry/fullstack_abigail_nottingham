import React from "react"
import phonebook from "../services/numbers"

const Persons = ({ persons, entries, setPersons }) => {
  const handleClick = (e) => {
    let idToDel = Number(e.target.value)
    if (window.confirm("This will delete this contact")) {
      phonebook.deleteNumber(idToDel)
        .then(status => {
          console.log(`Status ${status} on contact id ${idToDel}`)
          setPersons(persons.filter(p => p.id !== idToDel))
        })
    }
  }

  return (
    persons.map((person) => {
    if (entries.test(person.name.toLowerCase())) {
      return (
      <li key={person.name}>
        {person.name} {person.number}
        <button onClick={handleClick} value={person.id}>delete</button>
      </li>
      )
    } else { return null }
  })
  )}

export default Persons