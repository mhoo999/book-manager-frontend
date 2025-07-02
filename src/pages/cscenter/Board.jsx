import styled from 'styled-components'
const Board = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  `

  const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
  `

  const InquiryButton = styled.a`
    background-color: #2563eb;
    color: #fff !important;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    text-decoration: none;
    &:hover {
      background-color: #1d4ed8;
    }
  `

  const Table = styled.table`
    width: 100%;
    background-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-size: 0.875rem;
    border-collapse: collapse;

    thead {
      background-color: #f3f4f6;
      color: #374151;

      th {
        padding: 0.75rem 1rem;
        text-align: center;
      }

      th:nth-child(2) {
        text-align: left;
      }
    }

    tbody {
      color: #374151;

      tr {
        border-top: 1px solid #e5e7eb;
      }

      tr.reply {
        background-color: #f9fafb;
        color: #1d4ed8;

        td {
          color: #1d4ed8;
        }

        .admin {
          color: #6b7280;
        }
      }

      td {
        padding: 0.75rem 1rem;
        text-align: center;
      }

      td:nth-child(2) {
        text-align: left;
      }
    }
  `

  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;

    button {
      padding: 0.25rem 0.75rem;
      border-radius: 0.25rem;
      border: 1px solid #d1d5db;
      background-color: white;
      font-size: 0.875rem;
      cursor: pointer;

      &.active {
        background-color: #2563eb;
        color: white;
      }

      &:hover {
        background-color: #dbeafe;
      }
    }
  `

  return (
    <>
      <HeaderWrapper>
        <Title>📖 문의하기</Title>
        <InquiryButton href="#">문의하기</InquiryButton>
      </HeaderWrapper>

      <Table>
        <thead>
          <tr>
            <th className="w-16">번호</th>
            <th>제목</th>
            <th className="w-32">작성자</th>
            <th className="w-40">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>도서 '자바의 정석'의 최신판은 언제 입고되나요?</td>
            <td>홍길동</td>
            <td>2025-06-15</td>
          </tr>
          <tr className="reply">
            <td></td>
            <td>↳ [답변] 자바의 정석 5판은 다음 주 입고 예정입니다.</td>
            <td className="admin">관리자</td>
            <td className="admin">2025-06-16</td>
          </tr>
          <tr>
            <td>4</td>
            <td>대여 중인 책은 연장 신청이 가능한가요?</td>
            <td>장나라</td>
            <td>2025-06-14</td>
          </tr>
          <tr className="reply">
            <td></td>
            <td>↳ [답변] 도서 연장은 1회에 한하여 가능합니다.</td>
            <td className="admin">관리자</td>
            <td className="admin">2025-06-14</td>
          </tr>
          <tr>
            <td>3</td>
            <td>'미움받을 용기' 책은 예약할 수 없나요?</td>
            <td>김기태</td>
            <td>2025-06-13</td>
          </tr>
          <tr>
            <td>2</td>
            <td>분실한 책은 어떻게 처리해야 하나요?</td>
            <td>강호동</td>
            <td>2025-06-12</td>
          </tr>
          <tr>
            <td>1</td>
            <td>전자책은 따로 대여가 가능한가요?</td>
            <td>유재석</td>
            <td>2025-06-11</td>
          </tr>
        </tbody>
      </Table>

      <Pagination>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
      </Pagination>
    </>
  )
}

export default Board
