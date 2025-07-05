import styled from 'styled-components'

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
`

const NoContent = ({ msg }) => {
  return (
    <Container>
      <h3>{msg}</h3>
    </Container>
  )
}

export default NoContent
