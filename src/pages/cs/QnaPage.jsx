import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { questionList } from '../../api/qna/qnaApi'
import { Link } from 'react-router-dom'
import Pagination from '../../components/common/Pagination'
import useCustomMove from '../../hooks/useCustomMove'
import NoContent from '../../components/common/NoContent'

const TableWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const QuestionTable = styled.table`
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
