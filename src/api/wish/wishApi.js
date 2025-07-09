import jwtAxios from '../../util/jwtUtil'
import { API_SERVER_HOST } from '../books/bookApi' //'http://localhost:8080'

const uriWish = `${API_SERVER_HOST}/api/wish`

//희망도서신청 목록
export const wishList = async ({ page = 0, size = 10 } = {}) => {
  try {
    const token = localStorage.getItem('accessToken')
    const res = await jwtAxios.get(`${uriWish}?page=${page}&size=${size}`)
    return res.data
  } catch (err) {
    console.error('wishList error:', err)
    return { wishes: [] }
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