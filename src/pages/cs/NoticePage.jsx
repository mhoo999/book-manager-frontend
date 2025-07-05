import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { noticeList } from '../../api/notice/noticeApi'
import { Link } from 'react-router-dom'
import Pagination from '../../components/common/Pagination'
import useCustomMove from '../../hooks/useCustomMove'

const TableWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const NoticeTable = styled.table`
  width: 100%;
  font-size: 14px;
  text-align: center;
  border-collapse: collapse;
`

const Thead = styled.thead`
  background-color: #f3f4f6;
  color: #374151;
  font-size: 16px;

  th {
    padding: 12px 16px;
  }
`

const Tbody = styled.tbody`
  color: #1f2937;

  tr {
    border-top: 1px solid #e5e7eb;
  }

  td {
    padding: 12px 16px;
    text-align: center;
  }

  .text-left {
    text-align: left;
  }
`

const NoticeItem = ({
  num,
  noticeId,
  title,
  content,
  createdAt,
  type,
  adminId,
}) => {
  return (
    <tr>
      <td>{num}</td>
      <td className="text-left">
        <Link to={`${noticeId}`}>{title}</Link>
      </td>
      <td>{adminId && '관리자'}</td>
      <td>{type && '일반'}</td>
      <td>{createdAt.slice(0, 10)}</td>
    </tr>
  )
}

const NoticePage = () => {
  const { moveToList } = useCustomMove()
  const [serverData, setServerData] = useState({})

  useEffect(() => {
    noticeList().then((data) => {
      setServerData(data)
    })
  }, [])

  if (!serverData.notices || serverData.notices.length < 1) {
    return <h2>등록된 공지사항이 없습니다.</h2>
  }
  return (
    <>
      <TableWrapper>
        <NoticeTable>
          <Thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>종류</th>
              <th>작성일</th>
            </tr>
          </Thead>

          <Tbody>
            {serverData.notices.map((n, idx) => (
              <NoticeItem
                noticeId={n.noticeId}
                title={n.title}
                content={n.content}
                createdAt={n.createdAt}
                type={n.type}
                adminId={n.adminId}
                key={n.noticeId}
                num={idx + 1}
              />
            ))}
          </Tbody>
        </NoticeTable>
      </TableWrapper>

      <Pagination serverData={serverData} movePage={moveToList} />
    </>
  )
}

export default NoticePage
