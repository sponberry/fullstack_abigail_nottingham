import React, { useState, useEffect } from 'react'
import axios from "axios"
import Persons from "./components/Persons"
import AddForm from "./components/AddForm"
import SearchForm from "./components/SearchForm"

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ entriesToShow, setEntriesToShow] = useState('')

  let re = new RegExp(".*"+entriesToShow+".*")

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }, [])
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