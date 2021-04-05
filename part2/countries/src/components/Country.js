import React from "react"

const Country = ({ matchingCountries, setEntriesToShow }) => (
    matchingCountries.map(country => (
        <li key={country.alpha2Code}>{country.name}
        <button onClick={() => setEntriesToShow(country.name)}>show</button>
        </li>
    ))
    )

export default Country