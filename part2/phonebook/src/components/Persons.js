import React from "react"

const Persons = ({ persons, entries }) => 
  persons.map((person) => {
    if (entries.test(person.name.toLowerCase())) {
      return (<li key={person.name}>{person.name} {person.number}</li>)
    } else {
      return null
    }
  }
  )

export default Persons