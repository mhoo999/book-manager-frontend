import styled from 'styled-components'
import Board from './cscenter/Board'

const CSCenter = () => {
  const CSContainer = styled.section`
    > h2 {
      margin-bottom: 20px;
      font-size: 20px;

      > span {
        color: #3f82ff;
      }
    }
  `
  return (
    <CSContainer>
      <Board />
    </CSContainer>
  )
}

export default CSCenter
