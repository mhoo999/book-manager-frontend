import styled from 'styled-components'
import RentalList from './rental/RentalList'
import SearchForm from './rental/SearchForm'

const rentals = [
  {
    title: '어린왕자',
    author: '생텍쥐페리',
    rentDate: '2025-06-10',
    returnDate: '2025-06-24',
    status: '대여요청',
  },
  {
    title: '자바의 정석',
    author: '남궁성',
    rentDate: '2025-05-01',
    returnDate: '2025-05-15',
    status: '반납완료',
  },
  {
    title: '클린 코드',
    author: '로버트 마틴',
    rentDate: '2025-06-01',
    returnDate: '2025-06-15',
    status: '미납',
  },
  {
    title: '이펙티브 자바',
    author: '조슈아 블로크',
    rentDate: '2025-06-12',
    returnDate: '2025-06-26',
    status: '대여중',
  },
  {
    title: '토비의 스프링',
    author: '이일민',
    rentDate: '2025-05-20',
    returnDate: '2025-06-03',
    status: '반납완료',
  },
  {
    title: 'HTML+CSS 디자인',
    author: '고경희',
    rentDate: '2025-06-05',
    returnDate: '2025-06-19',
    status: '대여중',
  },
  {
    title: '리팩토링',
    author: '마틴 파울러',
    rentDate: '2025-05-10',
    returnDate: '2025-05-24',
    status: '반납완료',
  },
  {
    title: '모던 자바스크립트',
    author: '이호준',
    rentDate: '2025-06-01',
    returnDate: '2025-06-15',
    status: '미납',
  },
  {
    title: '코딩 인터뷰 완전분석',
    author: '게일 맥도웰',
    rentDate: '2025-06-08',
    returnDate: '2025-06-22',
    status: '대여중',
  },
  {
    title: '파이썬 완전정복',
    author: '윤인성',
    rentDate: '2025-05-15',
    returnDate: '2025-05-29',
    status: '반납완료',
  },
]

const RentalContainer = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;

    > span {
      color: #3f82ff;
    }
  }
`
const RentalState = () => {
  return (
    <RentalContainer>
      <h2>📖 대여목록</h2>
      <SearchForm />
      <RentalList rentals={rentals} />
    </RentalContainer>
  )
}

export default RentalState
