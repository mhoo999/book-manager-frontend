import axios from 'axios'
import { getCookie, setCookie } from './cookieUtil,'
import { API_SERVER_HOST } from '../books/bookApi'

const jwtAxios = axios.create()

//리프레시 토큰을 이용한 자동갱신
const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST
  const header = { headers: { Authorization: `Bearer ${accessToken}` } }
  const res = await axios.get(
    `${host}/api/auth/refresh?refreshToken=${refreshToken}`,
    header,
  )
  console.log('----------------------')
  console.log(res.data)
  return res.data
}

//요청 보내기 전
const beforeReq = (config) => {
  console.log('비동기 요청전 request ...')

  const memberInfo = getCookie('member')

  if (!memberInfo) {
    console.log('Member NOT FOUND')
    return Promise.reject({ response: { data: { error: 'REQUIRE_LOGIN' } } })
  }

  const { accessToken } = memberInfo

  // Authorization 헤더 처리(액세스 토큰 전달)
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
}

//요청 보내는 중 에러 발생
const requestFail = (err) => {
  console.log('요청에러 ....')
  return Promise.reject(err)
}

//응답 받기 전 처리
const beforeRes = async (res) => {
  console.log('before return response ....')

  //console.log(res)

  //'ERROR_ACCESS_TOKEN'
  const data = res.data

  if (data && data.error === 'ERROR_ACCESS_TOKEN') {
    const memberCookieValue = getCookie('member')

    const result = await refreshJWT(
      memberCookieValue.accessToken,
      memberCookieValue.refreshToken,
    )
    console.log('refreshJWT RESULT', result)

    memberCookieValue.accessToken = result.accessToken
    memberCookieValue.refreshToken = result.refreshToken

    setCookie('member', JSON.stringify(memberCookieValue), 1)

    //원래의 호출
    const originalRequest = res.config

    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`

    return await axios(originalRequest)
  }

  return res
}

//응답 중 에러 발생
const responseFail = (err) => {
  console.log('response fail err ....')
  return Promise.reject(err)
}

//request와 response는 각각 다른 interceptor 체인에 등록
jwtAxios.interceptors.request.use(beforeReq, requestFail) //요청 인터셉터
jwtAxios.interceptors.response.use(beforeRes, responseFail) //응답 인터셉터

export default jwtAxios
