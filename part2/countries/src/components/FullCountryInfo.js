import React from "react"

const FullCountryInfo = ({ country }) => {
    console.log("country props:",country)
    return (
    <div>
        <h1>{country.name}</h1>
        <p>
            Capital: {country.capital}
            <br />
            Population: {country.population}
        </p>
        <h2>Languages</h2>
        <ul>
            {country.languages.map(language => (
                <li>{language.name}</li>
            ))}
        </ul>
        <img src={country.flag} alt={country.name} width={200} />
    </div>
    )}

export default FullCountryInfo