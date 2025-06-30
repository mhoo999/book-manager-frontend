import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  gap: 24px;
  margin: 40px 0;

  > article {
    background-color: white;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    > h3 {
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
`

const Service = styled.article`
  flex: 1;

  > p {
    height: 24px;
    margin-bottom: 16px;

    > a {
      display: block;
      margin-left: 40px;
      font-size: 14px;
    }

    &:nth-of-type(1) {
      background-image: url(https://cdn-icons-png.flaticon.com/128/1008/1008959.png);
    }
    &:nth-of-type(2) {
      background-image: url(https://cdn-icons-png.flaticon.com/128/1828/1828911.png);
    }
    &:nth-of-type(3) {
      background-image: url(https://cdn-icons-png.flaticon.com/128/3523/3523885.png);
    }
    background-size: contain;
    background-repeat: no-repeat;
  }
`

const Notice = styled.article`
  flex: 2;

  > ul {
    > * + * {
      margin-top: 16px;
    }

    > li {
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }

      span {
        margin-left: 16px;
      }
    }
  }
`

const Content = () => {
  return (
    <Section>
      <Service>
        <h3>서비스 바로가기</h3>
        <p>
          <Link to={''}>도서문의</Link>
        </p>
        <p>
          <Link to={''}>희망도서 신청</Link>
        </p>
        <p>
          <Link to={''}>도서쇼핑몰 바로가기</Link>
        </p>
      </Service>

      <Notice>
        <h3>공지사항</h3>
        <ul>
          <li>
            <Link to={''}>
              📢 7월 신간 도서 입고 안내 (총 150종)
              <span className="text-gray">2025-06-25</span>
            </Link>
          </li>
          <li>
            <Link to={''}>
              🎁 여름방학 독서 이벤트 참가자 모집 (~6/30)
              <span className="text-gray">2025-06-22</span>
            </Link>
          </li>
          <li>
            <Link to={''}>
              🕐 대여 연장 정책 변경 안내 (1회 → 2회)
              <span className="text-gray">2025-06-18</span>
            </Link>
          </li>
          <li>
            <Link to={''}>
              🚚 도서 반납 지연 시 패널티 정책 신설
              <span className="text-gray">2025-06-15</span>
            </Link>
          </li>
        </ul>
      </Notice>
    </Section>
  )
}

export default Content
