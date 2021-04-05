import React, { useEffect, useState } from "react"
import axios from "axios"

const FullCountryInfo = ({ country }) => {
  const [ weather, setWeather ] = useState({main:{temp:""}, weather:[{description:""}],wind:{speed:""}})
  const aK = process.env.REACT_APP_API_KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${aK}&units=metric`
  let weatherImg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  useEffect(() => {
    axios.get(apiUrl)
    .then(response => {
      console.log(response.data)
      setWeather(response.data)
    })
  }, [apiUrl])
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
    <h2>Weather in {country.capital}</h2>
    <p><strong>Temperature:</strong> {Math.round(weather.main.temp)}°c</p>
    <img src={weatherImg} alt={weather.weather[0].description} />
    <p>{weather.weather[0].description}
    <br />
    <strong>Wind:</strong>{weather.wind.speed} km/ph</p>
  </div>
  )}

export default FullCountryInfo