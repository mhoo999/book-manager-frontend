import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { noticeCont } from '../../api/notice/noticeApi'
import { useEffect, useState } from 'react'

const NoticeBox = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`

const NoticeTitle = styled.h3`
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

const NoticeCont = styled.div`
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

const NoticeContent = () => {
  const navigate = useNavigate()
  const { noticeId } = useParams()
  const [notice, setNotice] = useState({})

  useEffect(() => {
    noticeCont(noticeId).then((data) => {
      // console.log('data=', data)
      setNotice(data)
    })
  }, [noticeId])

  if (!notice.noticeId) return <h2>공지내용 없음</h2>
  return (
    <>
      <NoticeBox>
        <NoticeTitle>{notice.title}</NoticeTitle>
        <MetaInfo>
          <div>
            <strong>작성자:</strong> {notice.adminId === 1 && '관리자'}
          </div>
          <div>
            <strong>작성일:</strong> {notice.createdAt.slice(0, 10)}
          </div>
          <div>
            <strong>종류:</strong> {notice.typeLabel}
          </div>
        </MetaInfo>
        <NoticeCont>{notice.content}</NoticeCont>
      </NoticeBox>

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

export default NoticeContent
