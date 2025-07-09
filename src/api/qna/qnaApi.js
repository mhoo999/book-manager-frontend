import axios from 'axios'
import { API_SERVER_HOST } from '../books/bookApi' //'http://localhost:8080'

const uriQuestion = `${API_SERVER_HOST}/api/question`

//문의목록
export const questionList = async ({ page = 0, size = 10 } = {}) => {
  try {
    const token = localStorage.getItem('accessToken')
    const res = await axios.get(`${uriQuestion}?page=${page}&size=${size}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    return res.data
  } catch (err) {
    console.error('questionList error:', err)
    return { questions: [] }
  }
}

//개별문의+답변
export const qnaCont = async (questionId) => {
  try {
    const token = localStorage.getItem('accessToken')
    const res = await axios.get(`${uriQuestion}/${questionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    return res.data
  } catch (err) {
    console.error('qnaCont error:', err)
    return { question: undefined, reply: undefined }
  }
}
