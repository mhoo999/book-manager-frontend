import styled from 'styled-components'
import BreadCrumb from '../../components/wish/BreadCrumb'
import { Outlet } from 'react-router-dom'
import useCustomLogin from '../../hooks/useCustomLogin'

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
  const { isLogin, moveToLoginReturn } = useCustomLogin()

  if (!isLogin) {
    alert('로그인후 사용할 수 있습니다.')
    return moveToLoginReturn()
  }

  return (
    <WishContainer>
      <BreadCrumb />
      <Outlet />
    </WishContainer>
  )
}

export default WishBook
