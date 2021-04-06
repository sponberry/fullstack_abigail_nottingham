import axios from "axios"

const url = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const addNumber = (newEntry) => {
  const request = axios.post(url, newEntry)
  return request.then(response => response.data)
}

// eslint-disable-next-line
export default { addNumber, getAll }