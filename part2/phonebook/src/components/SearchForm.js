import React from "react"

const SearchForm = ({ entriesToShow, setEntriesToShow }) => (
    <div>
      filter shown with
      <input value={entriesToShow} onChange={(e) => setEntriesToShow(e.target.value)} />
    </div>
  )
  
export default SearchForm