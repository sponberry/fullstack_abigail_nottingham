import React, { useState } from "react"
import phonebook from "../services/numbers"

const AddForm = ({ persons, setPersons }) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (persons.find(element => element.name.toLowerCase() === newName.toLowerCase())) {
        alert(`${newName} is already an entry in the phonebook`)
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