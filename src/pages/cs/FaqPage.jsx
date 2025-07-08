import styled from 'styled-components'

const FaqItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`

const Question = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1d4ed8;
  margin-bottom: 0.5rem;
`

const Answer = styled.p`
  color: #374151;
  line-height: 1.6;

  strong {
    font-weight: bold;
  }
`

const FaqPage = () => {
  return (
    <div className="faq-list" style={{ display: 'grid', gap: '1.5rem' }}>
      <FaqItem>
        <Question>Q. 도서를 대여한 후 연장할 수 있나요?</Question>
        <Answer>
          <strong>A.</strong> 네, 대여 기간이 끝나기 전이라면 최대 1회까지 7일
          연장할 수 있습니다. 마이페이지 &gt; 대여목록에서 연장 버튼을
          클릭해주세요.
        </Answer>
      </FaqItem>

      <FaqItem>
        <Question>Q. 희망도서 신청 후 얼마나 걸리나요?</Question>
        <Answer>
          <strong>A.</strong> 신청하신 희망도서는 검토 후 평균 3~5일 내
          처리되며, 승인 시 알림으로 안내드립니다.
        </Answer>
      </FaqItem>

      <FaqItem>
        <Question>Q. 도서를 반납하지 않으면 어떻게 되나요?</Question>
        <Answer>
          <strong>A.</strong> 반납 예정일을 초과하면 연체로 처리되며, 연체 기간
          동안 대여 서비스가 제한될 수 있습니다. 꼭 제때 반납해주세요.
        </Answer>
      </FaqItem>

      <FaqItem>
        <Question>Q. 회원정보는 어디서 수정하나요?</Question>
        <Answer>
          <strong>A.</strong> 상단 메뉴의 '내정보'에서 비밀번호 변경, 이메일
          수정 등 회원정보를 수정할 수 있습니다.
        </Answer>
      </FaqItem>

      <FaqItem>
        <Question>Q. 대여 가능한 도서인지 어떻게 확인하나요?</Question>
        <Answer>
          <strong>A.</strong> 도서검색 페이지에서 검색 후 도서 상세정보에 '대여
          가능' 여부가 표시됩니다.
        </Answer>
      </FaqItem>
    </div>
  )
}

export default FaqPage
