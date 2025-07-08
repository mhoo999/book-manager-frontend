import styled from 'styled-components'
import BreadCrumb from '../../components/mypage/BreadCrumb'
import { Outlet } from 'react-router-dom'
import useCustomLogin from '../../hooks/useCustomLogin'

const MypageContainer = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;

    > span {
      color: #3f82ff;
    }
  }
`

const MyPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin()

  if (!isLogin) {
    alert('로그인후 사용할 수 있습니다.')
    return moveToLoginReturn()
  }

  return (
    <MypageContainer>
      <BreadCrumb />
      <Outlet />
    </MypageContainer>
  )
}

export default MyPage
