import axios from 'axios'
import { API_SERVER_HOST } from '../api/books/bookApi'
import { getStorage, setStorage } from './localStorageUtil'

const jwtAxios = axios.create()

//리프레시 토큰을 이용한 자동갱신
const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST
  const header = { headers: { Authorization: `Bearer ${accessToken}` } }
  try {
    const res = await axios.get(
      `${host}/api/auth/refresh?refreshToken=${refreshToken}`,
      header,
    )
    return res.data
  } catch (err) {
    console.error('토큰 재발급 실패:', err)
    throw err
  }
}

//요청 보내기 전
const beforeReq = (config) => {
  console.log('비동기 요청전 request ...')

  // 로그인 요청은 토큰 없이 진행해야 하므로 무시
  if (
    ['/api/auth/login', '/api/v1/books'].some((path) =>
      config.url.includes(path),
    )
  ) {
    return config
  }

  const memberInfo = getStorage('member')

  if (!memberInfo) {
    console.log('Member NOT FOUND')
    return Promise.reject({ response: { data: { error: 'REQUIRE_LOGIN' } } })
  }

  const { accessToken } = memberInfo
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

  console.log('res=', res)

  //'ERROR_ACCESS_TOKEN'
  const data = res.data

  //401 응답이 온 경우를 체크
  if (res.status === 401 || (data && data.error === 'ERROR_ACCESS_TOKEN')) {
    const memberStorageValue = getStorage('member')

    const result = await refreshJWT(
      memberStorageValue.accessToken,
      memberStorageValue.refreshToken,
    )
    console.log('refreshJWT RESULT', result)

    memberStorageValue.accessToken = result.accessToken
    memberStorageValue.refreshToken = result.refreshToken

    setStorage('member', memberStorageValue, 1)

    //원래 요청 객체 재시도
    const originalRequest = res.config
    if (!originalRequest._retry) {
      originalRequest._retry = true
      originalRequest.headers.Authorization = `Bearer ${result.accessToken}`
      return await axios(originalRequest)
    }
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
