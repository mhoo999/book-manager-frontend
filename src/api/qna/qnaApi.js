import axios from 'axios'
import { API_SERVER_HOST } from '../books/bookApi' //'http://localhost:8080'

const uriQuestion = `${API_SERVER_HOST}/api/question`

//문의목록
export const questionList = async () => {
  try {
    const token = localStorage.getItem('accessToken') // 저장 방식에 따라 다름
    const res = await axios.get(`${uriQuestion}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true, // 쿠키도 같이 전송하려면 필요
    })
    return res.data
  } catch (err) {
    console.error('questionList error:', err)
    return { question: [] }
  }
}

//개별문의+답변
export const qnaCont = async (questionId) => {
  try {
    const res = await axios.get(`${uriQuestion}/${questionId}`)
    return res.data
  } catch (err) {
    console.error('qnaCont error:', err)
    return { data: {} }
  }
}
