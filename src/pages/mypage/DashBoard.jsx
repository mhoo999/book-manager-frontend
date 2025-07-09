import styled from 'styled-components'
import { Link } from 'react-router-dom'
import jwtAxios from '../../util/jwtUtil'
import { useEffect, useState } from 'react'

const DashContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 16px;
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
`

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 24px;
  }

  p {
    font-size: 2rem;
    font-weight: 700;
  }
`

const MenuCard = styled(Card)`
  text-align: left;

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: normal;
  }
`

const FlexRow = styled.div`
  display: flex;
  gap: 24px;
`

const NoticeBox = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  ul {
    font-size: 0.875rem;
    color: #374151;

    li + li {
      margin-top: 8px;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`

const SearchBox = styled(NoticeBox)`
  form {
    display: flex;
    gap: 16px;

    select,
    input {
      padding: 8px 12px;
      border-radius: 4px;
      border: 1px solid #d1d5db;
    }

    button {
      background-color: #2563eb;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #1d4ed8;
    }
  }
`

const DashBoard = () => {
  const [rentalCount, setRentalCount] = useState(0)
  const [overDueCount, setOverDueCount] = useState(0)

  useEffect(() => {
    const fetchDashboardCounts = async () => {
      try {
        const response = await jwtAxios.get('/api/v1/rents/myRentals')
        const data = response.data
        console.log(data)
        setRentalCount(data.checkedOutBooks)
        setOverDueCount(data.overdueBooks)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDashboardCounts()
  }, [])

  const [wishCount, setWishCount] = useState(0)

  useEffect(() => {
    const fetchWishCounts = async () => {
      try {
        const response = await jwtAxios.get('/api/wish/myWishes')
        const data = response.data.data
        console.log(data)
        setWishCount(data.myWishesCount)
      } catch (error) {
        console.error(error)
      }
    }
    fetchWishCounts()
  }, [])

  return (
    <DashContainer>
      <Grid>
        <Card>
          <h3>대여중인 도서</h3>
          <p style={{ color: '#2563eb' }}>{rentalCount}권</p>
        </Card>
        <Card>
          <h3>미납 도서</h3>
          <p style={{ color: '#ef4444' }}>{overDueCount}권</p>
        </Card>
        <Card>
          <h3>희망도서 처리현황</h3>
          <p style={{ color: '#10b981' }}>{wishCount}건</p>
        </Card>
      </Grid>

      <Grid>
        <MenuCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="도서검색"
          />
          <Link to="/books">
            <h3>도서검색</h3>
          </Link>
          <p>보유한 도서를 검색하고 대여 가능 여부를 확인해보세요.</p>
        </MenuCard>
        <MenuCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
            alt="대여목록"
          />
          <Link to="/rental/list">
            <h3>대여목록</h3>
          </Link>
          <p>현재 대여 중인 도서 목록과 반납 일정을 확인하세요.</p>
        </MenuCard>
        <MenuCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            alt="희망도서신청"
          />
          <Link to="/wish/list">
            <h3>희망도서신청</h3>
          </Link>
          <p>읽고 싶은 도서를 요청하면 도서관에서 검토 후 반영합니다.</p>
        </MenuCard>
        <MenuCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709790.png"
            alt="도서문의"
          />
          <Link to="/cs/qna">
            <h3>도서문의</h3>
          </Link>
          <p>도서에 대한 궁금증이나 요청 사항을 등록해보세요.</p>
        </MenuCard>
        <MenuCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1827/1827361.png"
            alt="공지사항"
          />
          <Link to="/cs/notice">
            <h3>공지사항</h3>
          </Link>
          <p>도서관의 최신 소식 및 변경 사항을 확인할 수 있습니다.</p>
        </MenuCard>
        <MenuCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="내정보"
          />
          <Link to="/mypage/info">
            <h3>내정보</h3>
          </Link>
          <p>회원정보를 확인하고 비밀번호 등을 변경할 수 있습니다.</p>
        </MenuCard>
      </Grid>

      <FlexRow>
        <NoticeBox>
          <h3>📢 최근 공지사항</h3>
          <ul>
            <li>
              <a href="#">📌 2025년 하반기 도서관 휴관일 안내</a>
            </li>
            <li>
              <a href="#">📌 신간 도서 입고 안내 및 이벤트</a>
            </li>
            <li>
              <a href="#">📌 대여 정책 변경 안내</a>
            </li>
          </ul>
        </NoticeBox>

        <SearchBox>
          <h3>🔍 도서 검색</h3>
          <form>
            <select>
              <option>도서명</option>
              <option>저자명</option>
            </select>
            <input type="text" placeholder="검색어 입력" />
            <button type="submit">확인</button>
          </form>
        </SearchBox>
      </FlexRow>
    </DashContainer>
  )
}

export default DashBoard
