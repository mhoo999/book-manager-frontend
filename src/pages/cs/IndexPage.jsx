import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import BreadCrumb from '../../components/cs/BreadCrumb'

const CSContainer = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;

    > span {
      color: #3f82ff;
    }
  }
`

const CSCenter = () => {
  return (
    <CSContainer>
      <BreadCrumb />
      <Outlet />
    </CSContainer>
  )
}

export default CSCenter
