import styled from 'styled-components'
import BreadCrumb from '../../components/mypage/BreadCrumb'
import { Outlet } from 'react-router-dom'

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
  return (
    <MypageContainer>
      <BreadCrumb />
      <Outlet />
    </MypageContainer>
  )
}

export default MyPage
