import styled from 'styled-components'

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
  return (
    <WishApplyContainer>
      <Section>
        <h3>📚 도서 정보</h3>
        <div className="grid">
          <div>
            <label>도서명</label>
            <input type="text" placeholder="예: 어린왕자" />
          </div>
          <div>
            <label>출판사</label>
            <input type="text" placeholder="예: 문학세계사" />
          </div>
          <div>
            <label>저자</label>
            <input type="text" placeholder="예: 생텍쥐페리" />
          </div>
          <div>
            <label>출판일</label>
            <input type="date" />
          </div>
        </div>
      </Section>

      <Section>
        <h3>👤 신청자 정보</h3>
        <div className="grid">
          <div>
            <label>이름</label>
            <input type="text" defaultValue="둘리" placeholder="예: 홍길동" />
          </div>
          <div>
            <label>전화번호</label>
            <input
              type="text"
              defaultValue="010-7294-3724"
              placeholder="예: 010-1234-5678"
            />
          </div>
        </div>
      </Section>

      <ButtonGroup>
        <button type="submit" className="submit">
          신청
        </button>
        <button type="reset" className="cancel">
          취소
        </button>
      </ButtonGroup>
    </WishApplyContainer>
  )
}

export default WishApply
