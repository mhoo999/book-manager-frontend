import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { wishList } from '../../api/wish/wishApi'
import useCustomMove from '../../hooks/useCustomMove'
import Pagination from '../../components/common/Pagination'
import { Link } from 'react-router-dom'
import NoContent from '../../components/common/NoContent'

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

const StatusLabel = styled.span`
  font-weight: bold;
  color: ${(props) => {
    switch (props.status) {
      case 1:
        return '#2563eb'; // 검토중
      case 2:
        return 'green';   // 승인됨
      case 3:
        return '#ca8a04'; // 구매중
      case 4:
        return '#7c3aed'; // 입고완료
      case 0:
        return '#dc2626'; // 반려됨
      default:
        return '#000';    // fallback
    }
  }};
`

const WishItem = ({
  wishId,
  dueDate,
  status,
  statusLabel,
  bookName,
  author,
  publisher,
}) => {
  return (
    <tr>
      <td>{dueDate.slice(0, 10)}</td>
      <td>
        <Link to={`${wishId}`}>{bookName}</Link>
      </td>
      <td>{author}</td>
      <td>{publisher}</td>
      <td>
        <StatusLabel status={status}>{statusLabel}</StatusLabel>{' '}
      </td>
    </tr>
  )
}

const WishList = () => {
  const { moveToList, page, size } = useCustomMove()
  const [serverData, setServerData] = useState({ wishes: [] })

  useEffect(() => {
    wishList({ page: page - 1, size }).then((data) => {
      setServerData({
        ...data,
        page: (data.page ?? 0) + 1, // 0부터 시작하므로 1부터 시작하도록 변환
        size: data.size,
        totalCount: data.totalCount,
        totalPages: data.totalPages,
        wishes: data.wishes || [],
      })
    })
  }, [page, size])

  if (!serverData.wishes || serverData.wishes.length < 1) {
    return <NoContent msg={`등록된 희망도서신청이 없습니다.`} />
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
            {serverData.wishes.map((w, idx) => (
              <WishItem
                wishId={w.wishId}
                dueDate={w.dueDate}
                status={w.status}
                statusLabel={w.statusLabel}
                bookName={w.bookName}
                author={w.author}
                publisher={w.publisher}
                key={w.wishId}
              />
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      <Pagination serverData={serverData} movePage={moveToList} />
    </WishContainer>
  )
}

export default WishList
