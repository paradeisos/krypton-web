export * from "./abstract-basic-restful-resource"
export * from "./session"

import axios from "axios"

axios.interceptors.response.use((response) => {
  return response
}, (err) => {
  // message.error(`API Error ${err.response.status}: ${err.response.statusText}`, 5)
  // TODO
  return Promise.reject(err)
})
