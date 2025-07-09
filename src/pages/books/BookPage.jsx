import { useEffect, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { bookInfo, rentRegister } from '../../api/books/bookApi'
import styled from 'styled-components'
import Loading from '../Loading'
import useCustomLogin from '../../hooks/useCustomLogin'

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 24px;
`

const BookDetail = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 40px;
`

const BookImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }
`

const BookInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    margin: 16px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
  }

  strong {
    font-weight: 600;
    margin-right: 8px;
  }

  .available {
    color: #16a34a;
    font-weight: 600;
  }

  .unavailable {
    color: #dc2626;
    font-weight: 600;
  }
`

const BookTableSection = styled.section`
  margin-top: 32px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  table {
    width: 100%;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 12px;
    border: 1px solid #e5e7eb;
    text-align: center;
  }

  thead {
    background-color: #f3f4f6;
    font-weight: 500;
    color: #374151;
  }

  .rentable {
    color: #16a34a;
  }

  .btn {
    background-color: #16a34a;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.875rem;
  }

  .btn:hover {
    background-color: #15803d;
    cursor: pointer;
  }
`

const CenterButton = styled.div`
  margin-top: 40px;
  text-align: center;

  span {
    display: inline-block;
    background-color: #3b82f6;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    background-color: #2563eb;
  }
`

const BookPage = () => {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const [searchParam, setSearchParam] = useSearchParams()
  const page = searchParam.get('page') ? parseInt(searchParam.get('page')) : 1
  const size = searchParam.get('size') ? parseInt(searchParam.get('size')) : 10

  const [book, setBook] = useState({})
  const { isLogin, moveToLogin } = useCustomLogin()

  useEffect(() => {
    //서버요청
    bookInfo(bookId).then((res) => {
      setBook(res)
    })
  }, [bookId])

  useEffect(() => {
    console.log('book=', book)
  }, [book])
  if (!book || !book.title) return <Loading />

  // book.books 중 대여 가능 여부 계산
  const isAnyBookAvailable = Array.isArray(book.books) && book.books.some((b) => b.status === 'AVAILABLE' || b.status === 'RENTABLE')

  // 대여신청 핸들러
  const handleRent = async (bookCode) => {
    if (!isLogin) {
      alert('로그인이 필요합니다.')
      moveToLogin({ returnUrl: location.pathname + location.search })
      return
    }
    const result = await rentRegister(bookCode)
    if (result && !result.error) {
      alert('대여신청이 완료되었습니다.')
      // 대여신청 성공 시 도서 상세정보를 다시 불러와서 버튼 상태 갱신
      bookInfo(bookId).then((res) => {
        setBook(res)
      })
    } else {
      alert(result.error || '대여신청에 실패했습니다.')
    }
  }

  return (
    <>
      <SectionTitle>📖 도서정보</SectionTitle>

      <BookDetail>
        <BookImage>
          <img src={book.cover} alt="도서 이미지" />
        </BookImage>
        <BookInfo>
          <h2>{book.title}</h2>
          <p>
            <strong>저자:</strong> {book.author}
          </p>
          <p>
            <strong>출판사:</strong> {book.publisher}
          </p>
          <p>
            <strong>출판일:</strong>{' '}
            {book.publish_date ? book.publish_date.slice(0, 10) : '-'}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>분류:</strong> {book.categoryCode}
          </p>
          <p>
            <strong>대여 상태:</strong>{' '}
            {isAnyBookAvailable ? (
              <span className="available">✔ 대여 가능</span>
            ) : (
              '⛔ 대여불가 (재고없음)'
            )}
          </p>
          <p style={{ marginTop: '24px' }}>{book.description}</p>
        </BookInfo>
      </BookDetail>

      <BookTableSection>
        <h3>소장사항</h3>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>도서코드</th>
              <th>도서위치</th>
              <th>도서상태</th>
              <th>대여신청</th>
            </tr>
          </thead>
          <tbody>
            {book.books.map((b, idx) => {
              const isRentable = b.status === 'AVAILABLE' || b.status === 'RENTABLE'
              return (
                <tr key={b.bookCode}>
                  <td>{idx + 1}</td>
                  <td>{b.bookCode}</td>
                  <td>{b.location}</td>
                  <td className="rentable">
                    {(b.status === 'AVAILABLE' || b.status === 'RENTABLE')
                      ? '대여가능'
                      : b.status === 'RENTED'
                        ? '대여중'
                        : '대여불가'}
                  </td>
                  <td>
                    <span
                      className="btn"
                      style={{
                        opacity: isRentable ? 1 : 0.5,
                        pointerEvents: isRentable ? 'auto' : 'none',
                      }}
                      onClick={() => isRentable && handleRent(b.bookCode)}
                    >
                      대여신청
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </BookTableSection>

      <CenterButton>
        <span onClick={() => navigate(-1)}>이전페이지</span>
      </CenterButton>
    </>
  )
}

export default BookPage
