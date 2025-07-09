import { lazy, useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import LatestBooks from '../../components/books/LatestBooks'

const SearchForm = lazy(() => import('./../../components/books/SearchForm'))

const SearchContainer = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;

    > span {
      color: #3f82ff;
    }
  }
`

const SearchBook = () => {
  const { bookId } = useParams()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const navigate = useNavigate()
  // /books로 접근 시 /books/search로 리다이렉트
  useEffect(() => {
    if (!bookId && !keyword) {
      navigate('search', { replace: true })
    }
  }, [bookId, keyword, navigate])

  let title = ''
  if (keyword) {
    title = `검색키워드:`
  } else {
    title = '도서 검색'
  }

  return (
    <SearchContainer>
      {bookId ? (
        <></>
      ) : (
        <h2>
          🔍 {title} {keyword && <span>{keyword}</span>}
        </h2>
      )}

      {bookId ? <></> : <SearchForm />}

      <Outlet />
    </SearchContainer>
  )
}

export default SearchBook
