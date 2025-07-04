import { lazy } from 'react'
import styled from 'styled-components'
import { Outlet, useSearchParams } from 'react-router-dom'
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
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  let title = ''
  if (keyword) {
    title = `검색결과:`
  } else {
    title = '도서 검색'
  }

  return (
    <SearchContainer>
      <h2>
        🔍 {title} {keyword && <span>{keyword}</span>}
      </h2>
      <SearchForm />
      <Outlet />
      <LatestBooks />
    </SearchContainer>
  )
}

export default SearchBook
