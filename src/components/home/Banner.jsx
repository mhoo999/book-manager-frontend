import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const Book = ({ src, title, desc }) => {
  return (
    <div>
      <Link to={''}>
        <img src={src} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </Link>
    </div>
  )
}

const Banner = () => {
  const [books, setBooks] = useState({ data: [] })

  useEffect(() => {
    setBooks({
      data: [
        {
          id: 1,
          src: 'https://picsum.photos/seed/book1/160/240',
          title: '모던 자바스크립트',
          desc: '이웅모 | 위키북스',
        },
        {
          id: 2,
          src: 'https://picsum.photos/seed/book2/160/240',
          title: 'HTML+CSS 디자인',
          desc: '조엘 스코스 | 한빛미디어',
        },
        {
          id: 3,
          src: 'https://picsum.photos/seed/book4/160/240',
          title: '리액트 완벽 가이드',
          desc: '맥스 슈바르츠무엘러 | 인사이트',
        },
        {
          id: 4,
          src: 'https://picsum.photos/seed/book3/160/240',
          title: '자바의 정석',
          desc: '남궁성 | 도우출판',
        },
        {
          id: 5,
          src: 'https://picsum.photos/seed/book5/160/240',
          title: '코딩 인터뷰 완전 분석',
          desc: '게일 맥도웰 | 인사이트',
        },
      ],
    })
  }, [])

  return (
    <Section>
      <h2>📕 인기도서</h2>

      <Container>
        {books.data.map((book) => (
          <Book
            src={book.src}
            title={book.title}
            desc={book.desc}
            key={book.id}
          />
        ))}
      </Container>
    </Section>
  )
}

export default Banner
