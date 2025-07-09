import jwtAxios from '../../util/jwtUtil'
import { API_SERVER_HOST } from '../books/bookApi' //'http://localhost:8080'

const uriWish = `${API_SERVER_HOST}/api/wish`

//희망도서신청 목록
export const wishList = async () => {
  try {
    const token = localStorage.getItem('accessToken') // 저장 방식에 따라 다름
    const res = await jwtAxios.get(`${uriWish}`)
    return res.data
  } catch (err) {
    console.error('wishList error:', err)
    return { wish: [] }
  }
}

//개별 희망도서신청
export const wishCont = async (wishId) => {
  try {
    const res = await jwtAxios.get(`${uriWish}/${wishId}`)
    return res.data
  } catch (err) {
    console.error('wishCont error:', err)
    return { data: {} }
  }
}
