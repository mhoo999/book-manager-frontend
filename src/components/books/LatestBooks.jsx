import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bannerBook } from '../../api/books/bookApi'

const Section = styled.section`
  position: relative;
  margin-top: 48px;

  > h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  > .arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
      background-color: #e0eaff;
    }

    &.arrow-left {
      left: 0;
    }

    &.arrow-right {
      right: 0;
    }
  }
`

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;

  > div {
    width: 192px;
    background: white;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    transition: all 0.1s;
    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      transform: translate(1px, 1px);
    }

    img {
      width: 160px;
      height: 240px;
      object-fit: cover;
      margin-bottom: 8px;
    }

    h3 {
      margin-bottom: 8px;
      font-weight: 500;
    }
  }
`

const Book = ({ id, src, title, desc }) => {
  return (
    <div>
      <Link to={`/books/${id}`}>
        <img src={src} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </Link>
    </div>
  )
}

const LatestBooks = () => {
  const [serverData, setServerData] = useState({ data: [] })

  useEffect(() => {
    //서버요청
    bannerBook().then((res) => {
      setServerData({ data: res.newBooks })
    })
  }, [])

  if (!serverData || serverData.data.length < 1) {
    return <></>
  }

  return (
    <Section>
      <h2>📚 신규도서</h2>

      <Container>
        {serverData.data.map((book, idx) => (
          <Book
            id={book.bookId}
            src={book.cover}
            title={book.title}
            desc={book.description}
            key={book.bookId}
          />
        ))}
      </Container>
    </Section>
  )
}

export default LatestBooks
