import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
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
    font-weight: 400;
    background-color: transparent;
    color: #000;
    text-decoration: none;
    text-align: center;

    &.on {
      font-weight: 600;
      background-color: #2563eb;
      color: white;
    }
  }
`

const BreadCrumb = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const isOverdue =
    location.pathname.endsWith('/over') ||
    (location.pathname.endsWith('/search') && searchParams.get('rentStatus') === 'OVERDUE')

  return (
    <Menu>
      <NavLink
        to="search"
        className={({ isActive }) => (!isOverdue && isActive ? 'on' : '')}
        end
      >
        📄 대여목록
      </NavLink>
      <NavLink
        to="over"
        className={({ isActive }) => (isOverdue && isActive ? 'on' : '')}
      >
        ⏰ 미납도서
      </NavLink>
    </Menu>
  )
}

export default BreadCrumb
