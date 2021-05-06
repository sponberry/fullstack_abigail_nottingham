import React, { useState, useEffect, useRef } from 'react';
import Note from './components/Note';
import Notification from "./components/Notification"
import noteService from "./services/notes"
import LoginForm from "./components/LoginForm"
import NoteForm from "./components/NoteForm"
import Togglable from "./components/Togglable"

const App = () => {  
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => { 
    noteService     
    .getAll()      
    .then(initialNotes => {             
      setNotes(initialNotes)      
    })  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}

    noteService.update(id, changedNote)
    .then(updatedNote => {
      setNotes(notes.map(note => note.id !== id ? note : updatedNote))
    })
    .catch(error => {
      setErrorMessage(
        `the note '${note.content}' was already deleted from the server.`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const noteFormRef = useRef()

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
    noteService.setToken(null)
  }

  const createNote = async noteObject => {
    noteFormRef.current.toggleVisibility()
    const addedNote = await noteService.create(noteObject)
    setNotes(notes.concat(addedNote))
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />

      {user === null
        ? <Togglable buttonLabel="login">
            <LoginForm 
              user={user}
              setUser={(user) => setUser(user)} 
              errorMessage={errorMessage}
              setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
              />
          </Togglable>
        : <div>
            <p>
              {user.name} logged in
              <button onClick={handleLogout}>logout</button>
            </p> 
            <Togglable buttonLabel="new note" ref={noteFormRef}>
              <NoteForm
                createNote={createNote}
              />
            </Togglable>
          </div>
      }

      <ul>
        {notesToShow.map(note => 
          <Note 
          key={note.id} 
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)} 
          />
        )}
      </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
    </div>
  )
}

export default App 