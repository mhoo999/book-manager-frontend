import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  button {
    padding: 8px 14px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;

    &:first-child {
      color: white !important;
      font-weight: bold;
      background-color: #3b82f6;
    }

    &:hover {
      color: white !important;
      background-color: #3b82f6;
    }
  }
`

const Pagination = ({ serverData, movePage }) => {
  // console.log('serverData=', serverData)
  let { page, size, totalCount, totalPages } = serverData

  let endPage = Math.ceil((page + 1) / 10) * 10 // 페이지네이션 끝번호
  const startPage = endPage - 10 + 1 // 페이지네이션 시작번호
  const realEndPage = Math.ceil(totalCount / size)

  // 페이지네이션 끝번호 재계산
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

      {pageNumList.map((pageNum, idx) => (
        <button
          type="button"
          onClick={() => movePage({ page: pageNum, size })}
          key={idx}
          style={{
            color: `${page + 1 === pageNum ? 'red' : 'black'}`,
          }}
        >
          {pageNum}
        </button>
      ))}

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
