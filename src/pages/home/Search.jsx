import styled from 'styled-components'

const SearchContainer = styled.section`
  > h2 {
    margin-bottom: 20px;
    font-size: 20px;
  }

  > .card {
    background-color: white;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    > form {
      display: flex;
      gap: 10px;
      align-items: center;

      > select {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      > input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      > button {
        padding: 8px 16px;
        background-color: #3b82f6;
        border: none;
        color: white;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: #2563eb;
        }
      }
    }
  }
`

const Search = () => {
  return (
    <SearchContainer>
      <h2>🔍 도서 검색</h2>
      <div className="card">
        <form>
          <select>
            <option>도서명</option>
            <option>저자명</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="submit">확인</button>
        </form>
      </div>
    </SearchContainer>
  )
}

export default Search
