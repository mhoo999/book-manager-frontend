import styled from 'styled-components'

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
  return (
    <MyInfoContainer>
      <FormBox>
        <Grid>
          <div>
            <Label>이름</Label>
            <Input type="text" value="홍길동" disabled />
          </div>
          <div>
            <Label>이메일</Label>
            <Input type="email" value="hong123@example.com" />
          </div>
          <div>
            <Label>연락처</Label>
            <Input type="text" value="010-1234-5678" />
          </div>
        </Grid>

        <div style={{ marginTop: '32px' }}>
          <SectionTitle>🔐 비밀번호 변경</SectionTitle>
          <Grid>
            <Input type="password" placeholder="현재 비밀번호" />
            <Input type="password" placeholder="새 비밀번호" />
            <Input type="password" placeholder="새 비밀번호 확인" />
          </Grid>
        </div>

        <ButtonRow>
          <Button>수정하기</Button>
          <Button secondary>회원탈퇴</Button>
        </ButtonRow>
      </FormBox>
    </MyInfoContainer>
  )
}

export default MyInfo
