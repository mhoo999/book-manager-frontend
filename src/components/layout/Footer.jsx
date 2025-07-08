import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: white;
  /* margin-top: 48px; */
  border-top: 1px solid #e5e7eb;

  > p {
    max-width: 1280px;
    margin: 0 auto;
    padding: 24px 16px;
    font-size: 14px;
    color: #6b7280;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy;북매니저 | 전화: 02)264-8567 | 이메일: admin@bookmanager.com</p>
    </FooterContainer>
  )
}

export default Footer
