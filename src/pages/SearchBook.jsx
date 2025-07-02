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

const sampleData = [
  {
    id: 1,
    title: '어린왕자의 철학',
    author: '정철',
    publisher: '철학의숲',
    img: 'https://picsum.photos/seed/1/200/280',
  },
  {
    id: 2,
    title: '다시 만난 어린왕자',
    author: '김민정',
    publisher: '문학사랑',
    img: 'https://picsum.photos/seed/2/200/280',
  },
  {
    id: 3,
    title: '어린왕자와 함께하는 하루',
    author: '이준',
    publisher: '하루북스',
    img: 'https://picsum.photos/seed/3/200/280',
  },
  {
    id: 4,
    title: '어린왕자의 편지',
    author: '송지현',
    publisher: '편지출판',
    img: 'https://picsum.photos/seed/4/200/280',
  },
  {
    id: 5,
    title: '어린왕자와 떠나는 여행',
    author: '홍길동',
    publisher: '여행의길',
    img: 'https://picsum.photos/seed/5/200/280',
  },
  {
    id: 6,
    title: '어린왕자의 지구일기',
    author: '박은영',
    publisher: '별책출판',
    img: 'https://picsum.photos/seed/6/200/280',
  },
  {
    id: 7,
    title: '어린왕자 그리고 장미',
    author: '최성훈',
    publisher: '플로라북스',
    img: 'https://picsum.photos/seed/7/200/280',
  },
  {
    id: 8,
    title: '어린왕자, 별을 걷다',
    author: '이아름',
    publisher: '은하수출판사',
    img: 'https://picsum.photos/seed/8/200/280',
  },
]

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
      {keyword ? <SearchResults resData={sampleData} /> : <RecommendedBooks />}
    </SearchContainer>
  )
}

export default SearchBook
