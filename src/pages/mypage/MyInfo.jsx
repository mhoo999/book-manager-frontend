import { useEffect, useState } from 'react'
import styled from 'styled-components'
import jwtAxios from '../../util/jwtUtil'
import { Navigate, useNavigate } from 'react-router-dom'
const MyInfoContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px;
`

const FormBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
  display: block;
  color: #374151;
`

const Input = styled.input`
  width: 96%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#f3f4f6' : 'white')};
`

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`

const ButtonRow = styled.div`
  text-align: right;
  margin-top: 24px;
`

const Button = styled.button`
  display: inline-block;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  color: white;
  background: ${(props) => (props.secondary ? '#6b7280' : '#2563eb')};
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.secondary ? '#4b5563' : '#1d4ed8')};
  }
`

const MyInfo = () => {
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNo: '',
  })

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await jwtAxios.get('/api/user/me')
        const data = response.data.data
        console.log(data)
        setUserInfo({
          name: data.name,
          email: data.email,
          phoneNo: data.phoneNo,
        })
      } catch (error) {
        console.error(error)
      }
      console.log('after setUserInfo:', userInfo)
    }
    fetchMyInfo()
  }, [])
  //////비밀번호 변경////////////////
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const handleChangePassword = async () => {
    try {
      if (passwords.newPassword !== passwords.confirmPassword) {
        alert('새 비밀번호가 일치하지 않습니다.')
        return
      }

      const response = await jwtAxios.put('/api/user/change-password', {
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
        confirmPassword: passwords.confirmPassword,
      })

      console.log('비밀번호 변경 완료:', response)
      alert('비밀번호가 성공적으로 변경되었습니다.')
      navigate('/mypage/dash') // ✅ 원하는 페이지로 이동!
    } catch (error) {
      console.error(error)
      alert('비밀번호 변경 실패!')
    }
  }
  //// 회원 탈퇴 라우팅

  const handleDeleteAccount = () => {
    // 정말 회원탈퇴 API 요청이 있다면 먼저 처리!
    // await api.deleteAccount()

    // 탈퇴 후 이동
    navigate('/mypage/withdraw') // 원하는 경로
  }

  return (
    <MyInfoContainer>
      <FormBox>
        <Grid>
          <div>
            <Label>이름</Label>
            <Input type="text" value={userInfo.name} disabled />
          </div>
          <div>
            <Label>이메일</Label>
            <Input type="email" value={userInfo.email} disabled />
          </div>
          <div>
            <Label>연락처</Label>
            <Input type="text" value={userInfo.phoneNo} disabled />
          </div>
        </Grid>

        <div style={{ marginTop: '32px' }}>
          <SectionTitle>🔐 비밀번호 변경</SectionTitle>
          <Grid>
            <Input
              type="password"
              placeholder="현재 비밀번호"
              value={passwords.currentPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, currentPassword: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="새 비밀번호"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="새 비밀번호 확인"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, confirmPassword: e.target.value })
              }
            />
          </Grid>
        </div>

        <ButtonRow>
          <Button onClick={handleChangePassword}>수정하기</Button>
          <Button secondary onClick={handleDeleteAccount}>
            회원탈퇴
          </Button>
        </ButtonRow>
      </FormBox>
    </MyInfoContainer>
  )
}

export default MyInfo
