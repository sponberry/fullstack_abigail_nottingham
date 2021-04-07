import React from "react"

const Notification = ({ message }) => {
  const notificationStyle = {
    color: message[1],
    display: "inline-block",
    fontStyle: "monospace",
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
    border: "solid 2px",
  }

  if (message) {
    return <div style={notificationStyle}>{message[0]}</div>
  } else {
    return null
  }
}

export default Notification