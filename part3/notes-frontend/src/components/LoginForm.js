import React, { useState } from "react"
import loginService from "../services/login"
import noteService from "../services/notes"

const LoginForm = ({ setUser, setErrorMessage, user, errorMessage }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        "loggedNoteappUser", JSON.stringify(user)
      )
      noteService.setToken(user.token)
      setUser(user)
      setUsername("")
      setPassword("")
    } catch (exception) {
      setErrorMessage("Wrong credentials")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }


  return(
        <form onSubmit={handleLogin}>
          <div>
            <label id="username">username</label>
            <input 
              type="text" 
              id="username"
              name="Username"
              placeholder="enter username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              />
          </div>
          <div>
            <label id="password">password</label>
            <input 
              type="password" 
              id="password"
              name="Password"
              placeholder="enter password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              />
          </div>
          <button type="submit">login</button>
        </form>
  )
}

export default LoginForm