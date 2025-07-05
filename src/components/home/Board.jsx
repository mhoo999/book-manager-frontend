import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Notice from './Notice'

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

const Board = () => {
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

      <Notice />
    </Section>
  )
}

export default Board
