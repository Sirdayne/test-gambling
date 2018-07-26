import axios from 'axios'

const BASE_URL = `api/`

let api = axios.create({
  baseURL: BASE_URL,
  timeout: 180000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default{
  get(path) {
    return api.get(path)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
