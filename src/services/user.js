import axios from 'axios'
import config from '../config'

export async function register(user) {

  user["role"]="VENDOR"
  console.log(user);
  
  const response = await axios.post(`${config.url}/register`, {...user})

  return response.data
}

export async function login(user) {
  // body parameters
  const body = {...user}

  // make API call
  const response = await axios.post(`${config.url}/login`, body)

  // read JSON data (response)
  return response
}
