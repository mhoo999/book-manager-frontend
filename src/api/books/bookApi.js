import jwtAxios from '../../util/jwtUtil'

export const API_SERVER_HOST = 'http://localhost:8080'
const uriBooks = `${API_SERVER_HOST}/api/v1/books`
const uriRent = `${API_SERVER_HOST}/api/v1/rent`

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
    return res.data
  } catch (err) {
    console.error('bookInfo error:', err)
    return { book: null }
  }
}

// 📌 신규도서 (비인증)
export const latestBook = async () => {
  try {
    const res = await jwtAxios.get(`${uriBooks}/latest`)
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

  const { type, keyword, page, size } = obj
  const params = { page, size }
  if (type && keyword !== undefined) {
    params[type] = keyword
  }

  try {
    const res = await jwtAxios.get(`${uriBooks}/search`, {
      params,
    })
    return res.data
  } catch (err) {
    console.error('searchBook error:', err)
    return { books: [] }
  }
}

// 📌 도서 대여신청 (인증 필요)
export const rentRegister = async (bookCode) => {
  try {
    const res = await jwtAxios.post(`${API_SERVER_HOST}/api/v1/rent/register`, {
      bookCode,
    })
    return res.data
  } catch (err) {
    console.error('rentRegister error:', err)
    return { error: '대여신청 실패' }
  }
}

// 전체 도서 목록(페이지네이션)
export const fetchBooks = async ({ page = 1, size = 10 } = {}) => {
  try {
    const res = await jwtAxios.get(`${uriBooks}`, {
      params: { page, size },
    });
    return res.data;
  } catch (err) {
    console.error('fetchBooks error:', err);
    return { books: [] };
  }
};
