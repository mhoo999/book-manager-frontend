import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.article`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  > a {
    width: 100px;
    padding: 6px 0;
    border-radius: 4px;
    font-size: 14px;
    font-weight: ${(props) => (props.active ? '600' : '400')};
    background-color: ${(props) => (props.active ? '#2563eb' : 'transparent')};
    color: ${(props) => (props.active ? '#fff' : '#000')};
    text-decoration: none;
    text-align: center;

    &:hover,
    &.on {
      background-color: #2563eb;
      color: white;
    }
  }
`

// BreadCrumb에서 탭 네비게이션 완전 제거
const BreadCrumb = () => null

export default BreadCrumb
