import React, { useState, useEffect } from 'react'
import axios from "axios"
import SearchForm from "./components/SearchForm"
import Countries from "./components/Countries"

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ entriesToShow, setEntriesToShow] = useState('')

  let re = new RegExp(".*"+entriesToShow.toLowerCase()+".*")

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data)
    })
  }, [])
  console.log(countries)

  return (
    <div>
      <SearchForm entriesToShow={entriesToShow} setEntriesToShow={setEntriesToShow} />
      <Countries countries={countries} entries={re} />
    </div>
  )
}

export default App