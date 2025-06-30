import styled from 'styled-components'

const Spinner = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 50vh;
  margin: 0 auto;

  > img {
    display: block;
    width: 100%;
  }
`

const Loading = () => {
  return (
    <Spinner>
      <img
        src="https://assets-v2.lottiefiles.com/a/03cdc6e0-118b-11ee-bf08-07d88a941cbd/kw6elhBKrf.gif"
        alt="loadingd"
      />
    </Spinner>
  )
}

export default Loading
