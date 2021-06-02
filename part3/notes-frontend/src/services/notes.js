import axios from "axios"

const baseUrl = "http://localhost:3001/notes"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, important: false }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = (id, newContent) => {
  const request = axios.put(`${baseUrl}/${id}`, newContent)
  return request.then(response => response.data)
}

export default { getAll, createNew, update }

// import axios from "axios"
// const baseUrl = "/api/notes"

// let token = null

// const setToken = newToken => {
//   token = `bearer ${newToken}`
// }

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   const nonExisting = {
//     id: 1000,
//     content: "This is a fake note",
//     date: "2019-05-30T17:30:31.098Z",
//     important: true,
//   }
//   return request.then(response => response.data.concat(nonExisting))
// }

// const create = async newObject => {
//   const config = {
//     headers: { Authorization: token },
//   }
//   const response = await axios.post(baseUrl, newObject, config)
//   return response.data
// }

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

// export default { getAll, create, update, setToken }