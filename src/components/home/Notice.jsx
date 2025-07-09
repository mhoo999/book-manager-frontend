import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { noticeList } from '../../api/notice/noticeApi'
import NoContent from '../common/NoContent'

const NoticeContainer = styled.article`
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

      a {
        display: flex;               /* 핵심 */
        justify-content: space-between; /* 좌우 정렬 */
        align-items: center;

        span#label {
          margin-right: 8px;
          color: gray;
        }

        span#createdAt {
          color: gray;
          flex-shrink: 0;
        }

        .left-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    }
  }
`;

const NoticeItem = ({ noticeId, typeLabel, title, createdAt }) => {
  return (
    <li>
      <Link to={`cs/notice/${noticeId}`}>
        <span className="left-content">
          <span id="label">{`[${typeLabel}]`}</span>
          {title}
        </span>
        <span id="createdAt">{createdAt}</span>
      </Link>
    </li>
  );
};


const Notice = () => {
  const [notices, setNotices] = useState([])
  useEffect(() => {
    noticeList().then((data) => {
      setNotices(data.notices)
    })
  }, [])

  useEffect(() => {
    console.log('notices=', notices)
  }, [notices])

  if (!notices || notices.length < 1) {
    return (
      <NoticeContainer>
        <NoContent msg={`등록된 공지사항이 없습니다.`} />
      </NoticeContainer>
    )
  }

  return (
    <NoticeContainer>
      <h3>공지사항</h3>
      <ul>
        {notices.slice(0, 4).map((n) => (
          <NoticeItem
            key={n.noticeId}
            noticeId={n.noticeId}
            typeLabel={n.typeLabel}
            title={n.title}
            createdAt={n.createdAt.slice(0, 10)}
          />
        ))}
      </ul>
    </NoticeContainer>
  )
}

export default Notice
