import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SearchResults = ({ resData }) => {
  const [result, setResult] = useState([])

  useEffect(() => {
    setResult(resData)
  }, [])

  const ArticleContainer = styled.article`
    margin-top: 48px;
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .highlight {
      color: #2563eb;
    }
  `

  const BookGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(180px, 1fr));
    gap: 48px 96px;
  `

  const BookCard = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;

    img {
      width: 100%;
      height: auto;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.875rem;
      color: #555;
    }
  `

  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;

    button {
      padding: 8px 14px;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 0.875rem;
      cursor: pointer;

      &:first-child {
        background-color: #2563eb;
        color: white;
        font-weight: bold;
      }

      &:hover {
        background-color: #e0e7ff;
      }
    }
  `

  return (
    <ArticleContainer>
      <BookGrid>
        {result.map((book) => (
          <BookCard key={book.id}>
            <Link to={''}>
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <p>
                {book.author} | {book.publisher}
              </p>
            </Link>
          </BookCard>
        ))}
      </BookGrid>

      <Pagination>
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page}>{page}</button>
        ))}
      </Pagination>
    </ArticleContainer>
  )
}

export default SearchResults
