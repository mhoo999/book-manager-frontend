import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const WishContainer = styled.div`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
`

const Section = styled.section`
  margin-bottom: 40px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 8px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
`

const TextGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  p:first-child {
    font-weight: 500;
  }
`

const ReturnBtn = styled.div`
  text-align: center;
  margin-top: 40px;

  span {
    background-color: #3b82f6;
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    display: inline-block;
  }

  span:hover {
    background-color: #2563eb;
  }
`

const WishDetail = () => {
  const { wishId } = useParams()
  const [wishData, setWishData] = useState({})
  const navigate = useNavigate()

  const [searchParam, setSearchParam] = useSearchParams()
  const page = searchParam.get('page') ? parseInt(searchParam.get('page')) : 1
  const size = searchParam.get('size') ? parseInt(searchParam.get('size')) : 10

  useEffect(() => {
    //여기에서 비동기로 데이터를 받아올 수 있도록 코드를 작성해 주세요
  }, [wishId])

  if (!wishData) return <h2>희망도서에 대한 상세 데이터가 없습니다.</h2>

  return (
    <WishContainer>
      <Section>
        <h3>도서</h3>
        <Grid>
          <img
            src="https://picsum.photos/seed/info123/300/200"
            alt="어린왕자 표지"
            style={{
              borderRadius: '6px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }}
          />
          <TextGroup>
            <div>
              <p>도서명</p>
              <p>어린왕자와 철학자들</p>
            </div>
            <div>
              <p>저자</p>
              <p>김철수</p>
            </div>
            <div>
              <p>출판사</p>
              <p>인문출판사</p>
            </div>
            <div>
              <p>출판일</p>
              <p>2024-11-10</p>
            </div>
          </TextGroup>
        </Grid>
      </Section>

      <Section>
        <h3>신청자</h3>
        <TextGroup>
          <div>
            <p>이름</p>
            <p>홍길동</p>
          </div>
          <div>
            <p>전화번호</p>
            <p>010-1234-5678</p>
          </div>
          <div>
            <p>신청일</p>
            <p>2025-06-15</p>
          </div>
        </TextGroup>
      </Section>

      <Section>
        <h3>처리상태</h3>
        <p style={{ color: '#2563eb', fontWeight: '600' }}>검토중</p>
      </Section>

      <ReturnBtn>
        <span onClick={() => navigate(-1)}>목록보기</span>
      </ReturnBtn>
    </WishContainer>
  )
}

export default WishDetail
