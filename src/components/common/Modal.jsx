import styled, { css } from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  ${(props) =>
    props.$isOpen
      ? ''
      : css`
          display: none;
        `}

  >section {
    overflow: hidden;
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    border-radius: 0.3rem;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: slideUp;
    animation-fill-mode: forwards;

    > header {
      position: relative;
      padding: 16px 64px;
      background-color: #f1f1f1;
      font-weight: 700;
    }

    > main {
      padding: 16px;
      border-bottom: 1px solid #dee2e6;
      border-top: 1px solid #dee2e6;
    }

    > footer {
      padding: 12px 16px;
      text-align: right;

      > button {
        outline: none;
        cursor: pointer;
        border: 0;
        margin: 0 auto;
        padding: 6px 12px;
        color: #fff;
        background-color: #6c757d;
        border-radius: 5px;
        font-size: 13px;
      }
    }
  }

  button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
`

const Modal = (props) => {
  const { isOpen, clseModalFn, title, children } = props
  return (
    <ModalContainer $isOpen={isOpen}>
      <section>
        <header>{title}</header>
        <main>{children}</main>
        <footer>
          <button onClick={clseModalFn}>close</button>
        </footer>
      </section>
    </ModalContainer>
  )
}

export default Modal
