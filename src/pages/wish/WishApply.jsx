import { useEffect, useState } from 'react'
import styled from 'styled-components'
import jwtAxios from '../../util/jwtUtil'
import { useNavigate } from 'react-router-dom'

const WishApplyContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const Section = styled.div`
  margin-bottom: 32px;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 16px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  label {
    display: block;
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
  }

  input {
    width: 99%;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`

const ButtonGroup = styled.div`
  text-align: right;
  margin-top: 24px;

  button {
    display: inline-block;
    padding: 8px 24px;
    border-radius: 4px;
    margin-left: 8px;
    border: none;
    color: white;
    cursor: pointer;
  }

  .submit {
    background-color: #2563eb;
  }

  .cancel {
    background-color: #6b7280;
  }

  .submit:hover {
    background-color: #1d4ed8;
  }

  .cancel:hover {
    background-color: #4b5563;
  }
`

const WishApply = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    bookTitle: '',
    publisher: '',
    author: '',
    publishDate: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    try {
      console.log('보낼 데이터:', form)
      const response = await jwtAxios.post('/api/wish/create', form)
      console.log('응답 바디:', response.data)
      navigate('/wish/list')
    } catch (error) {
      console.error('신청 실패:', error)
    }
  }

  const handleReset = () => {
    setForm({
      bookName: '',
      publisher: '',
      author: '',
      publishDate: '',
    })
  }
  const [userInfo, setUserInfo] = useState({
    name: '',
    phoneNo: '',
  })

  /// 내정보 가져오기
  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await jwtAxios.get('/api/user/me')
        const data = response.data.data
        console.log(data)
        setUserInfo({
          name: data.name,
          phoneNo: data.phoneNo,
        })
      } catch (error) {
        console.error(error)
      }
      console.log('after setUserInfo:', userInfo)
    }
    fetchMyInfo()
  }, [])

  return (
    <WishApplyContainer>
      <Section>
        <h3>📚 도서 정보</h3>
        <div className="grid">
          <div>
            <label>도서명</label>
            <input
              name="bookName"
              type="text"
              placeholder="예: 어린왕자"
              value={form.bookName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>출판사</label>
            <input
              name="publisher"
              type="text"
              placeholder="예: 문학세계사"
              value={form.publisher}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>저자</label>
            <input
              name="author"
              type="text"
              placeholder="예: 생텍쥐페리"
              value={form.author}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>출판일</label>
            <input
              name="publishDate"
              type="date"
              value={form.publishDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h3>👤 신청자 정보</h3>
        <div className="grid">
          <div>
            <label>이름</label>
            <input
              name="name"
              type="text"
              placeholder="예: 홍길동"
              value={userInfo.name}
              disabled // <- 수정 불가능하게
            />
          </div>
          <div>
            <label>전화번호</label>
            <input
              name="phone"
              type="text"
              placeholder="예: 010-1234-5678"
              value={userInfo.phoneNo}
              disabled
            />
          </div>
        </div>
      </Section>

      <ButtonGroup>
        <button className="submit" onClick={handleSubmit}>
          신청
        </button>
        <button onClick={handleReset} className="cancel">
          취소
        </button>
      </ButtonGroup>
    </WishApplyContainer>
  )
}
export default WishApply
