import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import GlobalStyle from '../components/layout/GlobalStyle'
import { Helmet } from 'react-helmet'

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

// 공통 레이아웃 컴포넌트
const Layout = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
