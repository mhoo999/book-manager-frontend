import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { wishCont } from '../../api/wish/wishApi'

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

const StatusLabel = styled.p`
  font-weight: 600;
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

const WishDetail = () => {
  const { wishId } = useParams()
  const [wish, setWish] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    wishCont(wishId).then((data) => {
      setWish(data)
    })
  }, [wishId])

  if (!wish) return <h2>희망도서신청 데이터가 없습니다.</h2>

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
              <p>{wish.bookName}</p>
            </div>
            <div>
              <p>저자</p>
              <p>{wish.author}</p>
            </div>
            <div>
              <p>출판사</p>
              <p>{wish.publisher}</p>
            </div>
            <div>
              <p>출판일</p>
              <p>{wish.publishDate && wish.publishDate.slice(0, 10)}</p>
            </div>
          </TextGroup>
        </Grid>
      </Section>

      <Section>
        <h3>신청자</h3>
        <TextGroup>
          <div>
            <p>이름</p>
            <p>{wish.userName}</p>
          </div>
          <div>
            <p>전화번호</p>
            <p>{wish.userPhone}</p>
          </div>
          <div>
            <p>신청일</p>
            <p>{wish.dueDate}</p>
          </div>
        </TextGroup>
      </Section>

      <Section>
        <h3>처리상태</h3>
        <StatusLabel status={wish.status}>{wish.statusLabel}</StatusLabel>
      </Section>

      <ReturnBtn>
        <span onClick={() => navigate(-1)}>목록보기</span>
      </ReturnBtn>
    </WishContainer>
  )
}

export default WishDetail
