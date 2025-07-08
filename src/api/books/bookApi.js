import jwtAxios from '../../util/jwtUtil'

export const API_SERVER_HOST = 'http://localhost:8080'
const uriBooks = `${API_SERVER_HOST}/api/v1/books`

// 📌 대여신청 (인증 필요)
export const rentBook = async (bookId) => {
  try {
    const res = await jwtAxios.post(`${uriBooks}/rent/${bookId}`)
    return res.data
  } catch (err) {
    console.error('rentBook error:', err)
    return { error: '대여 실패' }
  }
}

// 📌 책정보 (비인증)
export const bookInfo = async (bookId) => {
  try {
    const res = await jwtAxios.get(`${uriBooks}/${bookId}`)
    console.log('res=', res)
    return res.data
  } catch (err) {
    console.error('bookInfo error:', err)
    return { book: null }
  }
}

// 📌 신규도서 (비인증)
export const bannerBook = async () => {
  try {
    const res = await jwtAxios.get(`${uriBooks}/home`)
    console.log()
    return res.data
  } catch (err) {
    console.error('latestBook error:', err)
    return { books: [] }
  }
}

// 📌 도서검색 (비인증)
export const searchBook = async (obj) => {
  if (!obj) {
    console.warn('데이터의 상태가 비정상적입니다.')
    return { books: [] }
  }

  const key = obj.type
  const value = obj.keyword

  try {
    const res = await jwtAxios.get(`${uriBooks}/search`, {
      params: { [key]: value },
    })
    return res.data
  } catch (err) {
    console.error('searchBook error:', err)
    return { books: [] }
  }
}
