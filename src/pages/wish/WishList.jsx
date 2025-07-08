import styled from 'styled-components'
import useCustomLogin from '../../hooks/useCustomLogin'
import { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove'
import Pagination from '../../components/common/Pagination'
import { Link } from 'react-router-dom'

const WishContainer = styled.div`
  max-width: 1280px;
  margin: 40px auto;
  padding: 0 16px;
`

const TableWrapper = styled.div`
  overflow-x: auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  thead {
    background-color: #f3f4f6;
    color: #374151;
  }

  th,
  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }

  td button {
    display: inline-block;
    font-size: 13px;
    color: #dc2626;
    border: 1px solid #ef4444;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: #fef2f2;
    }
  }
`

const WishList = () => {
  const { moveToList } = useCustomMove()
  const [serverData, setServerData] = useState({ list: [] })

  useEffect(() => {
    //여기에서 비동기로 데이터를 받아올 수 있도록 코드를 작성해 주세요
  }, [])

  if (!serverData.list || serverData.list.length < 1) {
    return <h2>대여 데이터가 없습니다.</h2>
  }

  return (
    <WishContainer>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>신청일</th>
              <th>신청도서</th>
              <th>저자</th>
              <th>출판사</th>
              <th>처리상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-06-15</td>
              <td>
                <Link to={'../1'}>어린왕자와 철학자들</Link>
              </td>
              <td>김철수</td>
              <td>인문출판사</td>
              <td>
                <span style={{ color: '#2563eb', fontWeight: 'bold' }}>
                  검토중
                </span>{' '}
                <button>취소</button>
              </td>
            </tr>
            <tr>
              <td>2025-06-14</td>
              <td>
                <Link to={'../1'}>과학으로 읽는 어린왕자</Link>
              </td>
              <td>박지현</td>
              <td>지식너머</td>
              <td style={{ color: 'green', fontWeight: 'bold' }}>승인됨</td>
            </tr>
            <tr>
              <td>2025-06-12</td>
              <td>
                <Link to={'../1'}>어린왕자 다시 읽기</Link>
              </td>
              <td>이민호</td>
              <td>문학나무</td>
              <td style={{ color: '#ca8a04', fontWeight: 'bold' }}>구매중</td>
            </tr>
            <tr>
              <td>2025-06-10</td>
              <td>
                <Link to={'../1'}>어린왕자 해설서</Link>
              </td>
              <td>최윤정</td>
              <td>책읽는세상</td>
              <td style={{ color: '#7c3aed', fontWeight: 'bold' }}>입고완료</td>
            </tr>
            <tr>
              <td>2025-06-08</td>
              <td>
                <Link to={'../1'}>어린왕자와 인간관계</Link>
              </td>
              <td>정하늘</td>
              <td>힐링북스</td>
              <td style={{ color: '#dc2626', fontWeight: 'bold' }}>반려됨</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <Pagination serverData={serverData} movePage={moveToList} />
    </WishContainer>
  )
}

export default WishList
