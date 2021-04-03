import React, { useState } from 'react';

const Persons = ({ persons, entries }) => 
  persons.map((person) => {
    if (entries.test(person.name.toLowerCase())) {
      return (<li key={person.name}>{person.name} {person.number}</li>)
    } else {
      return null
    }
  }
  )

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ entriesToShow, setEntriesToShow] = useState('')

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

  // ^[a-z]*
  // let re = new RegExp(".*"+entriesToShow+".*")
  let re = new RegExp(".*"+entriesToShow+".*")

  return (
    <div>
      <h2>Phonebook</h2>
        filter shown with
        <input value={entriesToShow} onChange={(e) => setEntriesToShow(e.target.value)} />
      <h2>Add new</h2>
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
      <ul>
        <Persons persons={persons} entries={re} />
      </ul>
    </div>
  )
}

export default App