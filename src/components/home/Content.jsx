import { useEffect, useState } from 'react'
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
const NoticeItem = ({ id, title, regdate }) => {
  return (
    <li>
      <Link to={id}>
        {title}
        <span className="text-gray">{regdate}</span>
      </Link>
    </li>
  )
}

const Content = () => {
  const [notice, setNotice] = useState({ data: [] })
  useEffect(() => {
    setNotice({
      data: [
        {
          id: 1,
          title: '📢 7월 신간 도서 입고 안내 (총 150종)',
          regdate: '2025-06-25',
        },
        {
          id: 2,
          title: '🎁 여름방학 독서 이벤트 참가자 모집 (~6/30)',
          regdate: '2025-06-22',
        },
        {
          id: 3,
          title: '🕐 대여 연장 정책 변경 안내 (1회 → 2회)',
          regdate: '2025-06-18',
        },
        {
          id: 4,
          title: '🚚 도서 반납 지연 시 패널티 정책 신설',
          regdate: '2025-06-15',
        },
      ],
    })
  }, [])

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
          {notice.data.map((n) => (
            <NoticeItem
              key={n.id}
              id={n.id}
              title={n.title}
              regdate={n.regdate}
            />
          ))}
        </ul>
      </Notice>
    </Section>
  )
}

export default Content
