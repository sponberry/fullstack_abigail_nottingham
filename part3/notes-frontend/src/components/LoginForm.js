import React, { useState } from "react"
import PropTypes from "prop-types"
import loginService from "../services/login"
import noteService from "../services/notes"

const LoginForm = ({ setUser, setErrorMessage }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired,
    setErrorMessage: PropTypes.func.isRequired,
    user: PropTypes.isRequired,
    errorMessage: PropTypes.isRequired
  }

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
          id="usernameInput"
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
          id="passwordInput"
          name="Password"
          placeholder="enter password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id="loginButton" type="submit">login</button>
    </form>
  )
}

export default LoginForm