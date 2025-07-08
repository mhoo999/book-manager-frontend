import { useDispatch } from 'react-redux'
import { logout } from '../../slices/loginSlice'
import styled from 'styled-components'
import { replace, useNavigate } from 'react-router-dom'
import Modal from '../common/Modal'
import useCustomLogin from '../../hooks/useCustomLogin'

const Container = styled.div`
  flex-grow: 1;
  max-width: 480px;
  margin: 0 auto;
  padding: 80px 16px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`

const Message = styled.p`
  color: #4b5563;
  font-size: 16px;
  margin-bottom: 40px;
`

const LogoutForm = styled.div`
  button {
    width: 100%;
    background-color: #6786db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #3c67df;
    }
  }
`

const LogoutComponent = () => {
  const { doLogout, moveToPath } = useCustomLogin()

  const handleClickLogout = () => {
    doLogout()
    moveToPath('/')
  }

  return (
    <Container>
      <Title>🙋 로그아웃 하시겠어요?</Title>
      <Message>로그아웃을 원하시면 아래 버튼을 눌러주세요.</Message>
      <LogoutForm>
        <button onClick={handleClickLogout}>로그아웃</button>
      </LogoutForm>
    </Container>
  )
}

export default LogoutComponent
