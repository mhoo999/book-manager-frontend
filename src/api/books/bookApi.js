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
    const res = await jwtAxios.post(`${API_SERVER_HOST}/api/v1/rents/register`, {
      bookCode,
    })
    return res.data
  } catch (err) {
    console.error('rentRegister error:', err)
    return { error: err.response?.data?.error || '대여신청 실패' }
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

// 로그인한 유저의 렌탈 정보(페이지네이션)
export const fetchRents = async ({ page = 1, size = 10, rentStatus = '' } = {}) => {
  try {
    const res = await jwtAxios.get(`${API_SERVER_HOST}/api/v1/rents/search`, {
      params: { page, size, rentStatus },
    })
    const data = res.data
    return {
      list: data.rents || [],
      page: (data.page ?? 0) + 1,
      size: data.size,
      totalCount: data.totalCount,
      totalPages: data.totalPages,
    }
  } catch (err) {
    console.error('fetchRents error:', err)
    return { list: [] }
  }
}

// 개별 대여 상세 정보
export const fetchRentDetail = async (rentId) => {
  try {
    const res = await jwtAxios.get(`${API_SERVER_HOST}/api/v1/rents/${rentId}`)
    return res.data
  } catch (err) {
    console.error('fetchRentDetail error:', err)
    return null
  }
}
