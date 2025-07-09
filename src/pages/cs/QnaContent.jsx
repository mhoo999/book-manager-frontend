import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { qnaCont } from '../../api/qna/qnaApi'
import { useEffect, useState } from 'react'

const QuestionBox = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`

const QuestionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`

const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 1rem;

  strong {
    color: #1f2937;
  }
`

const QuestionCont = styled.div`
  margin-top: 1.5rem;
  line-height: 1.8;
  color: #1f2937;
`

const ReplyBox = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`

const ReplyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`

const ReplyCont = styled.div`
  margin-top: 1.5rem;
  line-height: 1.8;
  color: #1f2937;
`

const BackButton = styled.div`
  margin-top: 2.5rem;
  text-align: center;

  span {
    background-color: #3f82ff;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;

    &:hover {
      background-color: #206eff;
    }
  }
`

const QnaContent = () => {
  const navigate = useNavigate()
  const { questionId } = useParams()
  const [question, setQuestion] = useState(null)
  const [reply, setReply] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    qnaCont(questionId).then((data) => {
      if (!data || !data.question) {
        setError('해당 문의를 불러올 수 없습니다. (권한 또는 존재하지 않음)')
        setQuestion(null)
        setReply(null)
      } else {
        setQuestion(data.question)
        setReply(data.reply)
        setError(null)
      }
    }).catch(() => {
      setError('문의 정보를 불러오는 중 오류가 발생했습니다.')
      setQuestion(null)
      setReply(null)
    })
  }, [questionId])

  if (error) return <h2>{error}</h2>
  if (!question) return <h2>문의 정보를 불러오는 중입니다...</h2>
  if (!question.questionId) return <h2>해당 문의 없음</h2>
  return (
    <>
      <QuestionBox>
        <QuestionTitle>{question.title}</QuestionTitle>
        <MetaInfo>
          <div>
            <strong>작성자:</strong> {question.userName}
          </div>
          <div>
            <strong>작성일:</strong> {question.createdAt.slice(0, 10)}
          </div>
          <div>
            <strong>종류:</strong> {question.questionType === 0 ? '오류신고' : '문의'}
          </div>
        </MetaInfo>
        <QuestionCont>{question.content}</QuestionCont>
      </QuestionBox>

      <br />

      {reply &&
        <ReplyBox>
          <ReplyTitle>📌 관리자 답변</ReplyTitle>
          <ReplyCont>{reply.content}</ReplyCont>
        </ReplyBox>
      }

      <BackButton>
        <span
          onClick={() => {
            navigate(-1)
          }}
        >
          목록보기
        </span>
      </BackButton>
    </>
  )
}

export default QnaContent
