import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import GlobalStyle from '../components/layout/GlobalStyle'

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

// 공통 레이아웃 컴포넌트
const Layout = () => {
  return (
    <>
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
