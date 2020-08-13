import axios from "axios"

const api = axios.create({ baseURL: "http://localhost:4000" })

api.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
)

const errorHandler = (error) => {
  if (error.response.status.toString().startsWith("5")) {
    // window.location.href = "/500"
  }

  return Promise.reject({ ...error })
}

export { api }
