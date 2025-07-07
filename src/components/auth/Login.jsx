import styled from 'styled-components'
import useInputs from '../../hooks/useInputs'
import { useDispatch } from 'react-redux'
import { login } from '../../slices/loginSlice'
import { Link, replace, useNavigate } from 'react-router-dom'
import useCustomLogin from '../../hooks/useCustomLogin'

const Container = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 64px 16px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
`

const Form = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  > button {
    width: 100%;
    background-color: #2563eb;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #1d4ed8;
    }
  }
`

const FormGroup = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
  }

  input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`

const ActionLinks = styled.div`
  text-align: right;
  font-size: 14px;
  color: #2563eb;
  margin-top: 12px;

  a {
    margin-left: 16px;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`

const initState = {
  email: '',
  pw: '',
}

const Login = () => {
  const [loginParam, onChange, reset] = useInputs(initState)
  const { doLogin, moveToPath } = useCustomLogin()

  const { email, pw } = loginParam

  const handleClickLogin = () => {
    doLogin(loginParam).then((data) => {
      console.log('data=', data)

      if (data.error) {
        alert(
          '입력하신 이메일 또는 비밀번호가 올바르지 않습니다.\n다시한번 확인해 주세요',
        )
        reset()
      } else {
        alert('로그인 성공~!')
        moveToPath('/')
      }
    })
  }

  return (
    <>
      <Container>
        <Title>🔐 회원 로그인</Title>
        <Form>
          <FormGroup>
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="이메일를 입력하세요"
            />
          </FormGroup>
          <FormGroup>
            <label>비밀번호</label>
            <input
              type="password"
              name="pw"
              value={pw}
              onChange={onChange}
              placeholder="비밀번호를 입력하세요"
            />
          </FormGroup>
          <button onClick={handleClickLogin}>로그인</button>
          <ActionLinks>
            <Link to={''}>비밀번호 찾기</Link>
            <Link to={''}>회원가입</Link>
          </ActionLinks>
        </Form>
      </Container>
    </>
  )
}

export default Login
