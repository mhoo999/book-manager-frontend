import React from 'react'
import {
  Title,
  TableWrapper,
  Table,
  CancelButton,
  Pagination,
} from './StyledWishTable'

const WishList = () => {
  return (
    <>
      <Title>📦 신청목록</Title>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>신청일</th>
              <th>신청도서</th>
              <th>저자</th>
              <th>출판사</th>
              <th>처리상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-06-15</td>
              <td>어린왕자와 철학자들</td>
              <td>김철수</td>
              <td>인문출판사</td>
              <td className="status blue">
                <span>검토중</span>
                <CancelButton>취소</CancelButton>
              </td>
            </tr>
            <tr>
              <td>2025-06-14</td>
              <td>과학으로 읽는 어린왕자</td>
              <td>박지현</td>
              <td>지식너머</td>
              <td className="green">승인됨</td>
            </tr>
            <tr>
              <td>2025-06-12</td>
              <td>어린왕자 다시 읽기</td>
              <td>이민호</td>
              <td>문학나무</td>
              <td className="yellow">구매중</td>
            </tr>
            <tr>
              <td>2025-06-10</td>
              <td>어린왕자 해설서</td>
              <td>최윤정</td>
              <td>책읽는세상</td>
              <td className="purple">입고완료</td>
            </tr>
            <tr>
              <td>2025-06-08</td>
              <td>어린왕자와 인간관계</td>
              <td>정하늘</td>
              <td>힐링북스</td>
              <td className="red">반려됨</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <Pagination>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </Pagination>
    </>
  )
}

export default WishList
