import React, { useState } from "react"

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState("")

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      date: new Date().toISOString(),
      // important: Math.random() < 0.5,
      important: false,
    })
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div className="formDiv">
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm