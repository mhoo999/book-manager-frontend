import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import jwtAxios from '../../util/jwtUtil'
import { useDispatch } from 'react-redux'
import { logout } from '../../slices/loginSlice'


const WithdrawContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const Box = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1.5rem;
    border-radius: 0.375rem;
    color: white;
    text-decoration: none;
    border: none;
  }

  button {
    background-color: #ef4444;
  }

  button:hover {
    background-color: #dc2626;
  }

  a {
    background-color: #9ca3af;
  }

  a:hover {
    background-color: #6b7280;
  }
`

const Withdraw = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleWithdraw = async () => {
    const confirmed = window.confirm('정말로 탈퇴하시겠습니까?')
    if (!confirmed) return

    try {
      await jwtAxios.delete('/api/user/withdraw') // 실제 API 경로 맞춰줘!
      alert('회원 탈퇴가 완료되었습니다.')
      localStorage.removeItem('member')
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.error(error)
      alert('회원 탈퇴에 실패했습니다.')
    }
  }

  return (
    <WithdrawContainer>
      <Box>
        <div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#dc2626',
              marginBottom: '2rem',
            }}
          >
            정말 탈퇴하시겠습니까?
          </h2>
          <p style={{ marginBottom: '2rem', color: '#374151' }}>
            회원 탈퇴 시, 모든 개인 정보와 대여 이력, 찜한 도서 정보가
            삭제됩니다.
            <br />
            삭제된 정보는 복구할 수 없습니다.
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              marginTop: '0.5rem',
            }}
          >
            ※ 현재 대여 중인 도서가 있다면 탈퇴가 불가능 합니다.
          </p>
        </div>
        <ButtonGroup>
          <button onClick={handleWithdraw}>탈퇴하기</button>

        </ButtonGroup>
      </Box>
    </WithdrawContainer>
  )
}

export default Withdraw
