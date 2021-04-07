import React, { useState } from "react"
import phonebook from "../services/numbers"

const AddForm = ({ persons, setPersons }) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const currentEntry = persons.find(element => element.name.toLowerCase() === newName.toLowerCase())
      if (currentEntry) {
        let confirmed = window.confirm(`${newName} is already an entry in the phonebook, replace number?`)
        if (confirmed) {
          phonebook.update({...currentEntry, number: newNumber}, currentEntry.id)
          .then(updated => setPersons(persons.map(p => p.id !== updated.id ? p : updated)))
        }
      } else {
        phonebook.addNumber({name: newName, number: newNumber})
        .then(updatedData => setPersons(persons.concat(updatedData)))
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