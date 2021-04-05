import React from "react"
import Country from "./Country"
import FullCountryInfo from "./FullCountryInfo"

const Countries = ({ countries, entries }) => {
  let matches = []
  if (countries.length > 0) {
    countries.map(country => {
      if (entries.test(country.name.toLowerCase())) {
        matches.push(country)
      }
      return null
    })
  } 

  if (matches.length > 200) {
    return null
  } else if (matches.length > 10) {
    return <p>Too many matches</p>
  } else if (matches.length === 1) {
    return <FullCountryInfo country={matches[0]} />
  } else {
    return (
      <ul>
      <Country matchingCountries={matches}/>
      </ul>
  )}
}

export default Countries