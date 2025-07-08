import Board from '../../components/home/Board'
import Banner from '../../components/home/Banner'
import SearchForm from '../../components/books/SearchForm'
import styled from 'styled-components'

const BookSearch = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;
  }
`

const Home = () => {
  return (
    <>
      <BookSearch>
        <h2>🔍 도서검색</h2>
        <SearchForm />
      </BookSearch>
      <Board />
      <Banner />
    </>
  )
}

export default Home
