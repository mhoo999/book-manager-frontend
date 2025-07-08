import styled from 'styled-components'
import useCustomLogin from '../../hooks/useCustomLogin'
import { useEffect } from 'react'
import { latestBook } from '../../api/books/bookApi'

const RentalContainer = styled.div`
  margin-top: 2rem;
`

const FilterBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  select {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`

const RentalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  thead {
    background-color: #f5f5f5;
  }

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
  }

  .text-red {
    color: #ef4444;
    font-weight: 500;
  }

  .text-green {
    color: #10b981;
    font-weight: 500;
  }

  .text-gray {
    color: #6b7280;
    font-weight: 500;
  }
`

const CancelButton = styled.button`
  display: inline-block;
  margin-left: 0.5rem;
  background-color: #ef4444;
  color: white;
  padding: 2px 8px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`

const Pagination = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #e0f2fe;
    }
  }
`

const RentalList = ({ rentals }) => {
  const { exceptionHandle } = useCustomLogin()

  useEffect(() => {
    //서버요청
    latestBook()
      .then((data) => {})
      .catch((err) => exceptionHandle(err))
  }, [])

  return (
    <RentalContainer>
      <FilterBox>
        <select>
          <option value="">전체보기</option>
          <option value="대여요청">대여요청</option>
          <option value="대여중">대여중</option>
          <option value="반납완료">반납완료</option>
          <option value="미납">미납</option>
        </select>
      </FilterBox>

      <RentalTable>
        <thead>
          <tr>
            <th>도서명</th>
            <th>저자</th>
            <th>대여일</th>
            <th>반납예정일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((book, i) => (
            <tr key={i}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.rentDate}</td>
              <td>{book.returnDate}</td>
              <td
                className={
                  book.status === '미납'
                    ? 'text-red'
                    : book.status === '대여중'
                      ? 'text-green'
                      : 'text-gray'
                }
              >
                {book.status === '대여요청' ? (
                  <>
                    <span>{book.status}</span>
                    <CancelButton>취소</CancelButton>
                  </>
                ) : (
                  <span>{book.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </RentalTable>

      <Pagination>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n}>{n}</button>
        ))}
      </Pagination>
    </RentalContainer>
  )
}

export default RentalList
