import { useState } from 'react'
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom'

const useCustomMove = () => {
  //문자열을 정수로 변환
  const getNum = (strNum, defaultValue) => {
    if (!strNum) return defaultValue
    return parseInt(strNum)
  }

  const [searchParam, setSearchParam] = useSearchParams()
  const page = getNum(searchParam.get('page'), 1)
  const size = getNum(searchParam.get('size'), 10)

  const queryDefault = createSearchParams({ page, size }).toString()

  const navigate = useNavigate()
  const location = useLocation()
  let queryString = ''

  //현재페이지번호를 클릭해도 서버에 데이터를 요청하기 위한 상태변수
  const [refresh, setRefresh] = useState(false)

  const moveToList = (pageParam) => {
    let queryString = ''
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1)
      const sizeNum = getNum(pageParam.size, 10)
      queryString = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString()
      if (location.pathname.startsWith('/rental')) {
        navigate(`/rental/search?${queryString}`)
      } else if (location.pathname.startsWith('/books')) {
        navigate(`/books/search?${queryString}`)
      } else if (location.pathname.startsWith('/cs/qna')) {
        navigate(`/cs/qna?${queryString}`)
      } else if (location.pathname.startsWith('/cs/notice')) {
        navigate(`/cs/notice?${queryString}`)
      } else if (location.pathname.startsWith('/wish')) {
        navigate(`/wish?${queryString}`)
      }
    } else {
      if (location.pathname.startsWith('/rental')) {
        navigate(`/rental/search`)
      } else if (location.pathname.startsWith('/books')) {
        navigate(`/books/search`)
      } else if (location.pathname.startsWith('/cs/qna')) {
        navigate(`/cs/qna`)
      } else if (location.pathname.startsWith('/cs/notice')) {
        navigate(`/cs/notice`)
      } else if (location.pathname.startsWith('/wish')) {
        navigate(`/wish`)
      }
    }
  }

  const moveToRead = (bookId) => {
    navigate({ pathname: `../info/${bookId}`, search: queryDefault })
  }

  // console.log('page=', page)
  // console.log('size=', size)

  return { moveToList, moveToRead, page, size }
}

export default useCustomMove
