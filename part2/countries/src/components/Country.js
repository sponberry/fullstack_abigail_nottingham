import React from "react"

const Country = ({ matchingCountries }) => (
    matchingCountries.map(country => (
        <li key={country.alpha2Code}>{country.name}</li>
    ))
)

export default Country