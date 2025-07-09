import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  button {
    padding: 8px 14px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    /* 배경, 폰트색은 인라인 스타일로만 제어 */
    background-color: unset;
    color: unset;
    font-weight: unset;
    /* &:first-child, &:hover에서 color, background-color를 제어하지 않음 */
  }
`

const Pagination = ({ serverData, movePage }) => {
  let { page, size, totalCount, totalPages } = serverData

  let endPage = Math.ceil((page + 1) / 10) * 10 // 페이지네이션 끝번호
  const startPage = endPage - 10 + 1 // 페이지네이션 시작번호
  const realEndPage = Math.ceil(totalCount / size)

  if (realEndPage < endPage) {
    endPage = realEndPage
  }

  const pageNumList = []
  for (let i = startPage; i <= endPage; i++) {
    pageNumList[i - 1] = i
  }

  const prev = startPage > 10 ? true : false
  const next = endPage < realEndPage ? true : false

  return (
    <Container>
      {prev ? (
        <span
          onClick={() =>
            movePage({
              page: startPage - 1,
              size,
            })
          }
        >
          Prev
        </span>
      ) : (
        ''
      )}

      {pageNumList.map((pageNum, idx) => {
        const isActive = page === pageNum
        return (
          <button
            type="button"
            onClick={() => movePage({ page: pageNum, size })}
            key={idx}
            style={{
              backgroundColor: isActive ? '#3f82ff' : 'white',
              color: isActive ? 'white' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
              border: isActive ? '1.5px solid #3f82ff' : '1px solid #ddd',
            }}
          >
            {pageNum}
          </button>
        )
      })}

      {next ? (
        <span
          onClick={() =>
            movePage({
              page: endPage + 1,
              size: size,
            })
          }
        >
          Next
        </span>
      ) : (
        ''
      )}
    </Container>
  )
}

export default Pagination
