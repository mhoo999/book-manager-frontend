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

  const res = await axios.post(`${host}/login`, body, {
    header,
    withCredentials: true, // 서버에서 refreshToken을 쿠키로 내려주는 경우 필요
  })

  const { accessToken, name: email } = res.data.data

  // accessToken 및 사용자 정보 localStorage에 저장
  // localStorage.setItem('member', JSON.stringify({ email, accessToken }))

  return res.data.data
}
