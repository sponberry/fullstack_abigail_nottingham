import React, { useState } from "react"
import noteService from "../services/notes"

const NoteForm = ({ setNotes, notes }) => {
  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    noteService
      .create(noteObject)
      .then(addedNote => {
        setNotes(notes.concat(addedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )
}

export default NoteForm