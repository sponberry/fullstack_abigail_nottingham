import React, { useState } from 'react';
import Persons from "./components/Persons"
import AddForm from "./components/AddForm"
import SearchForm from "./components/SearchForm"

const App = ({ loadedPersons }) => {
  const [ persons, setPersons ] = useState(loadedPersons) 
  const [ entriesToShow, setEntriesToShow] = useState('')

  let re = new RegExp(".*"+entriesToShow+".*")

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