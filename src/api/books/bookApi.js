import axios from 'axios'

export const API_SERVER_HOST = 'http://localhost:8080'
const uriBooks = `${API_SERVER_HOST}/api/v1/books`

//책정보
export const bookInfo = async (bookId) => {
  try {
    const res = await axios.get(`${uriBooks}/${bookId}`)
    return res
  } catch (err) {
    console.error('latestBook error:', err)
    return { books: [] }
  }
}

//신규도서
export const latestBook = async () => {
  try {
    const res = await axios.get(`${uriBooks}/latest`)
    return res.data
  } catch (err) {
    console.error('latestBook error:', err)
    return { books: [] }
  }
}

//도서검색
export const searchBook = async (obj) => {
  if (!obj) {
    console.warn('데이터의 상태가 비정상적입니다.')
    return { books: [] }
  }

  const key = obj.type
  const value = obj.keyword

  try {
    const res = await axios.get(`${uriBooks}/search`, {
      params: { [key]: value },
    })

    return res.data
  } catch (err) {
    console.error('searchBook error:', err)
    return { books: [] }
  }
}
