import React from "react"
import phonebook from "../services/numbers"

const Persons = ({ persons, entries, setPersons, setMessageConfig }) => {
  const deleteMsg = (name, message) => {
    setMessageConfig([
      `${name} ${message}`,
      "red"
    ])
    setTimeout(() => {
      setMessageConfig(false)
    }, 5000)
  }
  

  const handleClick = (e) => {
    let idToDel = Number(e.target.value)
    let name = persons.find(p => p.id === idToDel).name
    if (window.confirm(`This will delete ${name} permanently`)) {
      phonebook.deleteNumber(idToDel)
        .then(status => {
          console.log(`Status ${status} on contact id ${idToDel}`)
          deleteMsg(name, "has been deleted from the server")
        })
        .catch(error => {
          deleteMsg(name, "not found. Entry already been removed from the server")
        })
        setPersons(persons.filter(p => p.id !== idToDel))
    }}

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