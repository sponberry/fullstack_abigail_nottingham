import axios from "axios"

const url = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const addNumber = newEntry => {
  const request = axios.post(url, newEntry)
  return request.then(response => response.data)
}

const deleteNumber = entry => {
  const request = axios.delete(`${url}/${entry}`)
  return request.then(response => response.status)
}

const update = (updatedEntry, id) => {
  const request = axios.put(`${url}/${id}`, updatedEntry)
  return request.then(response => response.data)
}

// eslint-disable-next-line
export default { addNumber, getAll, deleteNumber, update }