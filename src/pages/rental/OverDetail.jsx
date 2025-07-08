import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const OverDetailContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 48px 16px;
`

const Box = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Section = styled.div``

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

const StatusText = styled.p`
  color: red;
  font-weight: bold;
`

const Footer = styled.footer`
  background: white;
  border-top: 1px solid #e5e7eb;
  margin-top: 64px;
  text-align: center;
  padding: 24px 0;
  font-size: 14px;
  color: #6b7280;
`

const ButtonCenter = styled.div`
  text-align: center;

  span {
    text-decoration: none;
    background: #2563eb;
    color: white !important;
    padding: 10px 24px;
    border-radius: 6px;

    &:hover {
      background: #1d4ed8;
      cursor: pointer;
    }
  }
`

const OverDetail = () => {
  const { overdueId } = useParams()
  const [overdueData, setOverdueData] = useState({})
  const navigate = useNavigate()

  const [searchParam, setSearchParam] = useSearchParams()
  const page = searchParam.get('page') ? parseInt(searchParam.get('page')) : 1
  const size = searchParam.get('size') ? parseInt(searchParam.get('size')) : 10

  useEffect(() => {
    //여기에서 비동기로 데이터를 받아올 수 있도록 코드를 작성해 주세요
  }, [overdueId])

  if (!overdueData) return <h2>미납에 대한 상세 데이터가 없습니다.</h2>

  return (
    <OverDetailContainer>
      <Box>
        <Section>
          <SectionTitle>도서명</SectionTitle>
          <p>클린 코드</p>
        </Section>
        <Section>
          <SectionTitle>저자</SectionTitle>
          <p>로버트 마틴</p>
        </Section>
        <Section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <div>
            <SectionTitle>대여일</SectionTitle>
            <p>2025-06-01</p>
          </div>
          <div>
            <SectionTitle>반납예정일</SectionTitle>
            <StatusText>2025-06-10</StatusText>
          </div>
          <div>
            <SectionTitle>현재상태</SectionTitle>
            <StatusText>미납</StatusText>
          </div>
          <div>
            <SectionTitle>초과일수</SectionTitle>
            <StatusText>11일</StatusText>
          </div>
        </Section>
        <Section>
          <SectionTitle>미납안내</SectionTitle>
          <p style={{ fontSize: '14px', color: '#374151' }}>
            반납예정일을 초과하여 도서가 반납되지 않았습니다.
            <br />
            초과일수에 따라 도서 대여가 제한될 수 있으며, 빠른 반납을
            부탁드립니다.
          </p>
        </Section>
        <ButtonCenter>
          <span onClick={() => navigate(-1)}>← 미납도서</span>
        </ButtonCenter>
      </Box>
    </OverDetailContainer>
  )
}

export default OverDetail
