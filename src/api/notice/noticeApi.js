import axios from 'axios'
import { API_SERVER_HOST } from '../books/bookApi' //'http://localhost:8080'

const uriNotice = `${API_SERVER_HOST}/api/notice`

//공지목록
export const noticeList = async ({ page = 0, size = 10 } = {}) => {
  try {
    const token = localStorage.getItem('accessToken')
    const res = await axios.get(`${uriNotice}?page=${page}&size=${size}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    return res.data
  } catch (err) {
    console.error('noticeList error:', err)
    return { notices: [] }
  }
}

//개별공지글
export const noticeCont = async (noticeId) => {
  try {
    const res = await axios.get(`${uriNotice}/${noticeId}`)
    return res.data
  } catch (err) {
    console.error('noticeCont error:', err)
    return { data: {} }
  }
}
