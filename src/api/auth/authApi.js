import axios from 'axios'
import { API_SERVER_HOST } from '../books/bookApi'

const host = `${API_SERVER_HOST}/api/auth`

export const loginPost = async (loginParam) => {
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  console.log('loginParam =', loginParam)

  const body = {
    username: loginParam.email,
    password: loginParam.pw,
  }

  const res = await axios.post(`${host}/login`, body, header)

  return res.data
}
