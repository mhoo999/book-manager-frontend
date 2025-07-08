import styled from 'styled-components'
import BreadCrumb from '../../components/wish/BreadCrumb'
import { Outlet } from 'react-router-dom'

const WishContainer = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;

    > span {
      color: #3f82ff;
    }
  }
`

const WishBook = () => {
  return (
    <WishContainer>
      <BreadCrumb />
      <Outlet />
    </WishContainer>
  )
}

export default WishBook
