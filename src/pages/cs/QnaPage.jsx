import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const InquiryButton = styled.a`
  background-color: #2563eb;
  color: #fff !important;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  text-decoration: none;
  &:hover {
    background-color: #1d4ed8;
  }
`

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-size: 0.875rem;
  border-collapse: collapse;

  thead {
    background-color: #f3f4f6;
    color: #374151;

    th {
      padding: 0.75rem 1rem;
      text-align: center;
    }

    th:nth-child(2) {
      text-align: left;
    }
  }

  tbody {
    color: #374151;

    tr {
      border-top: 1px solid #e5e7eb;
    }

    tr.reply {
      background-color: #f9fafb;
      color: #1d4ed8;

      td {
        color: #1d4ed8;
      }

      .admin {
        color: #6b7280;
      }
    }

    td {
      padding: 0.75rem 1rem;
      text-align: center;
    }

    td:nth-child(2) {
      text-align: left;
    }
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

  button {
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid #d1d5db;
    background-color: white;
    font-size: 0.875rem;
    cursor: pointer;

    &.active {
      background-color: #2563eb;
      color: white;
    }

    &:hover {
      background-color: #dbeafe;
    }
  }
`

const QuestionItem = ({
  num,
  questionId,
  title,
  createdAt,
  questionType,
  userName,
}) => {
  return (
    <tr>
      <td>{num}</td>
      <td>{questionType == 0 ? '오류신고' : '문의'}</td>
      <td className="text-left">
        <Link to={`${questionId}`}>{title}</Link>
      </td>
      <td>{userName}</td>
      <td>{createdAt.slice(0, 10)}</td>
    </tr>
  )
}

const QnaPage = () => {
  const { moveToList } = useCustomMove()
  const [serverData, setServerData] = useState({})

  useEffect(() => {
    questionList().then((data) => {
      setServerData(data)
    })
  }, [])

  if (!serverData.questions || serverData.questions.length < 1) {
    return <NoContent msg={`등록된 문의가 없습니다.`} />
  }
  return (
    <>
      <TableWrapper>
        <QuestionTable>
          <Thead>
            <tr>
              <th className="w-16">번호</th>
              <th className="w-16">분류</th>
              <th>제목</th>
              <th className="w-32">작성자</th>
              <th className="w-40">작성일</th>
            </tr>
          </Thead>

          <Tbody>
            {serverData.questions.map((q, idx) => (
              <QuestionItem
                questionId={q.questionId}
                title={q.title}
                createdAt={q.createdAt}
                questionType={q.questionType}
                userName={q.userName}
                key={q.questionId}
                num={idx + 1}
              />
            ))}
          </Tbody>
        </QuestionTable>
      </TableWrapper>

      <Pagination serverData={serverData} movePage={moveToList} />
    </>
  )
}

export default QnaPage
