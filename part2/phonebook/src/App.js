import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import AddForm from "./components/AddForm"
import SearchForm from "./components/SearchForm"
import phonebook from "./services/numbers"

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ entriesToShow, setEntriesToShow] = useState('')

  let re = new RegExp(".*"+entriesToShow+".*")

  useEffect(() => {
    phonebook.getAll().then(
      allNumbers => setPersons(allNumbers)
    )}, [])
  console.log("render", persons.length, "contacts")

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchForm entriesToShow={entriesToShow} setEntriesToShow={setEntriesToShow} />
      <h2>Add new</h2>
      <AddForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} entries={re} />
      </ul>
    </div>
  )
}

export default App