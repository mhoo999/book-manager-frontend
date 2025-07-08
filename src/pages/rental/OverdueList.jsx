import styled from 'styled-components'
import useCustomLogin from '../../hooks/useCustomLogin'
import { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove'
import Pagination from '../../components/common/Pagination'
import { Link } from 'react-router-dom'

const OverdueContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

const OverdueTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  thead {
    background-color: #f3f4f6;

    th {
      text-align: left;
      padding: 12px;
      font-weight: 600;
      color: #374151;
    }
  }

  tbody {
    td {
      padding: 12px;
      border-top: 1px solid #e5e7eb;
    }

    .overdue {
      color: #dc2626;
      font-weight: bold;
    }
  }
`
const OverdueList = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin()
  const { moveToList } = useCustomMove()

  const [serverData, setServerData] = useState({ list: [] })
  useEffect(() => {
    //여기에서 비동기로 데이터를 받아올 수 있도록 코드를 작성해 주세요
  }, [])

  if (!isLogin) {
    alert('로그인후 사용할 수 있습니다.')
    return moveToLoginReturn()
  }

  if (!serverData.list && serverData.list.length < 1)
    return <h2>미납 데이터가 없습니다.</h2>
  return (
    <OverdueContainer>
      <OverdueTable>
        <thead>
          <tr>
            <th>도서명</th>
            <th>저자</th>
            <th>대여일</th>
            <th>반납예정일</th>
            <th>대여상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to={'../1'}>클린 코드</Link>
            </td>
            <td>로버트 마틴</td>
            <td>2025-06-01</td>
            <td className="overdue">2025-06-10</td>
            <td className="overdue">미납</td>
          </tr>
          <tr>
            <td>
              <Link to={'../1'}>모던 자바스크립트</Link>
            </td>
            <td>이호준</td>
            <td>2025-06-02</td>
            <td className="overdue">2025-06-12</td>
            <td className="overdue">미납</td>
          </tr>
          <tr>
            <td>
              <Link to={'../1'}>코딩 인터뷰 완전분석</Link>
            </td>
            <td>게일 맥도웰</td>
            <td>2025-05-28</td>
            <td className="overdue">2025-06-05</td>
            <td className="overdue">미납</td>
          </tr>
          <tr>
            <td>
              <Link to={'../1'}>파이썬 완전정복</Link>
            </td>
            <td>윤인성</td>
            <td>2025-06-03</td>
            <td className="overdue">2025-06-13</td>
            <td className="overdue">미납</td>
          </tr>
        </tbody>
      </OverdueTable>

      <Pagination serverData={serverData} movePage={moveToList} />
    </OverdueContainer>
  )
}

export default OverdueList
