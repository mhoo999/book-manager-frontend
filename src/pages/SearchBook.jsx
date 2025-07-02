import { lazy } from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import RecommendedBooks from './search/RecommendedBooks'

const SearchForm = lazy(() => import('./search/SearchForm'))
const SearchResults = lazy(() => import('./search/SearchResults'))

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
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type')
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
      {keyword ? <SearchResults keyword={keyword} /> : <RecommendedBooks />}
    </SearchContainer>
  )
}

export default SearchBook
