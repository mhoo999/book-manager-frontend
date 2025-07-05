import axios from 'axios'

export const API_SERVER_HOST = 'http://localhost:8080'
const uriNotice = `${API_SERVER_HOST}/api/notice`

//공지목록
export const noticeList = async () => {
  try {
    const res = await axios.get(`${uriNotice}`)
    return res.data
  } catch (err) {
    console.error('noticeList error:', err)
    return { notice: [] }
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
