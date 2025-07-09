import styled from 'styled-components'
import useCustomLogin from '../../hooks/useCustomLogin'
import { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove'
import Pagination from '../../components/common/Pagination'
import { fetchRents } from '../../api/books/bookApi'
import { useSearchParams, useNavigate, NavLink, useLocation } from 'react-router-dom'

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

const RENT_STATUS_OPTIONS = [
  { value: '', label: '전체보기' },
  { value: 'REQUESTED', label: '대여요청' },
  { value: 'RENTED', label: '대여중' },
  { value: 'RETURNED', label: '반납완료' },
  { value: 'OVERDUE', label: '미납' },
]

// 대여목록/미납도서 탭 네비게이션
const RentalTabs = () => {
  const location = useLocation()
  // 미납도서 탭 활성화: /rental/over 또는 /rental/search?rentStatus=OVERDUE
  const isOverdueActive =
    location.pathname === '/rental/over' ||
    (location.pathname === '/rental/search' && location.search.includes('rentStatus=OVERDUE'))

  return (
    <article className="tab-nav">
      <NavLink
        to="/rental/search"
        className={({ isActive }) => isActive && !isOverdueActive ? 'on' : ''}
        end
      >
        📄 대여목록
      </NavLink>
      <NavLink
        to="/rental/over"
        className={() => isOverdueActive ? 'on' : ''}
      >
        ⏰ 미납도서
      </NavLink>
    </article>
  )
}

const RentalSearch = () => {
  const { moveToList, page, size } = useCustomMove()
  const [serverData, setServerData] = useState({ list: [] })
  const [searchParams] = useSearchParams()
  const [rentStatus, setRentStatus] = useState(() => searchParams.get('rentStatus') || '')

  // 쿼리스트링 rentStatus가 바뀌면 상태도 동기화
  useEffect(() => {
    const param = searchParams.get('rentStatus') || ''
    setRentStatus(param)
  }, [searchParams])

  useEffect(() => {
    fetchRents({ page: page - 1, size, rentStatus }).then((data) => {
      setServerData(data)
    })
  }, [page, size, rentStatus])

  if (!serverData.list || serverData.list.length < 1) {
    return <h2>대여 데이터가 없습니다.</h2>
  }
  return (
    <RentalContainer>
      <RentalTabs />
      <FilterBox>
        <select value={rentStatus} onChange={e => setRentStatus(e.target.value)}>
          {RENT_STATUS_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </FilterBox>

      <RentalTable>
        <thead>
          <tr>
            <th>도서명</th>
            <th>대여일</th>
            <th>반납예정일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {serverData.list.map((rent, i) => (
            <tr key={rent.rentCode}>
              <td>
                <img src={rent.bookCover} alt={rent.bookName} style={{ width: 40, marginRight: 8, verticalAlign: 'middle' }} />
                {rent.bookName}
              </td>
              <td>{rent.rentDate ? rent.rentDate : '-'}</td>
              <td>{rent.dueDate ? rent.dueDate : '-'}</td>
              <td>
                {rent.rentStatus === 'REQUESTED' && <span className="text-gray">대여요청</span>}
                {rent.rentStatus === 'REJECTED' && <span className="text-red">거절</span>}
                {rent.rentStatus === 'RETURNED' && <span className="text-green">반납완료</span>}
                {rent.rentStatus === 'RENTED' && <span className="text-green">대여중</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </RentalTable>

      <Pagination serverData={serverData} movePage={moveToList} />
    </RentalContainer>
  )
}

export default RentalSearch
