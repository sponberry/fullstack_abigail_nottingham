import React, { useState } from 'react'

const Persons = ({ persons }) => 
  persons.map((person) => 
  <li key={person.name}>{person.name} {person.number}</li>
  )

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '39-44-5323523'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find(element => element.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already an entry in the phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}));
    }
    setNewName("");
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <p>Debug {newName}</p>
      <ul>
        <Persons persons={persons} />
      </ul>
    </div>
  )
}

export default App