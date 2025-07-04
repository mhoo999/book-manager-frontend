import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: relative;

  > div {
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px;
  }
`
const Container = styled.div`
  display: flex;
  position: relative;
`

const Logo = styled.h1`
  background-image: url('https://cdn-icons-png.flaticon.com/512/29/29302.png');
  background-repeat: no-repeat;
  background-size: contain;

  > a {
    display: block;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    text-indent: 50px;
  }
`
const Navigation = styled.nav`
  position: absolute;
  top: 20px;
  right: 16px;

  > .gnb {
    display: flex;
    gap: 0 24px;
    > li {
      position: relative;
      font-size: 16px;

      > a {
        display: block;
        height: 34px;
        color: #374151;
        transition: all 0.2s;

        &.on,
        &:hover {
          color: #2563eb;
        }
      }

      > .lnb {
        display: ${(props) => (props.show ? 'block' : 'none')};
        position: absolute;
        top: 56px;
        left: 0;
        z-index: 1000;
        width: 160px;
        animation: fade 0.3s;

        a {
          display: inline-block;
          padding: 8px 0px;
          &:hover {
            color: #fff;
            background-color: #3b82f6;
          }
        }
      }
    }
  } //end of nav
`

const BgLnb = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 72px;
  z-index: 1000;
  width: 100%;
  height: 120px;
  background-color: rgba(59, 130, 246, 0.06);
  border-top: 3px solid #3b82f6;
  border-bottom: 1px solid #bfdbfe;
  animation: fade 0.3s;
`

/**
 * Link, NavLink는 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.
 * NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트이다.
 * <NavLink to="경로" className={({isActive}) => isActive ? 'on' : undefined}>링크 이름</NavLink>
 * <NavLink to="경로" style={({isActive}) => isActive ? activeStyle : undefined}>링크 이름</NavLink>
 *
 */

//prettier-ignore
const Header = () => {

  const [showLnb, setShowLnb] = useState(false)

  return (
    <HeaderContainer>
      <div>      
        <BgLnb onMouseLeave={()=>setShowLnb(false)} show={showLnb} />
        <Container>
          <Logo>
            <Link to={'/'}>북매니저</Link>
          </Logo>

{/* 
  위 코드에서 styled-components에서 show 값을 CSS에서 사용하기 위해 props로 넘기지만, HTML 태그로 렌더링될 때도 show="false"처럼 전달되어 경고가 발생합니다.
  styled-components에서는 $로 시작하는 prop은 자동으로 DOM에 전달되지 않기 때문에 아래처럼 바꾸는 게 가장 깔끔합니다.

  <NavLink>에서 클래스를 문자열로 줄 수도 있고, 함수형으로 isActive를 받아 조건부 클래스 지정 가능
  <NavLink>에서 state는	페이지 이동 시 전달할 상태값 (useLocation()으로 받을 수 있음)

    <Link to="/bookdetail" state={{ bookId: 123, title: '자바스크립트 완전정복' }} >

    const location = useLocation();
    const { bookId, title } = location.state || {}; // state 없을 수도 있음
*/}
          <Navigation onMouseEnter={()=>setShowLnb(true)}  show={showLnb}>
            <ul className="gnb">
              <li>
                <NavLink to={'/'} className={({isActive}) => isActive ? 'on' : undefined}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/book'} className={({isActive}) => isActive ? 'on' : undefined}>도서검색</NavLink>
              </li>
              <li>
                <NavLink to={'/rentalstate'} className={({isActive}) => isActive ? 'on' : undefined}>대여현황</NavLink>
                <ol className="lnb">
                  <li><Link to={'/rentalstate/list'}>대여목록</Link></li>
                  <li><Link to={'/rentalstate/overdue'}>미납도서</Link></li>
                </ol>
              </li>
              <li>
                <NavLink to={'/wishbook'} className={({isActive}) => isActive ? 'on' : undefined}>희망도서</NavLink>
                <ol className="lnb">
                  <li><Link to={'/wishbook/list'}>신청목록</Link></li>
                  <li><Link to={'/wishbook/request'}>도서신청</Link></li>
                </ol>
              </li>
              <li>
                <NavLink to={'/cscenter'} className={({isActive}) => isActive ? 'on' : undefined}>고객센터</NavLink>
                <ol className="lnb">
                  <li><Link to={'/cscenter/request'}>문의하기</Link></li>
                  <li><Link to={'/cscenter/faq'}>FAQ</Link></li>
                  <li><Link to={'/cscenter/notice'}>공지사항</Link></li>
                </ol>
              </li>
              <li>
                <NavLink to={'/mypage/duly'} className={({isActive}) => isActive ? 'on' : undefined}>마이페이지</NavLink>
                <ol className="lnb">
                  <li><Link to={'/mypage/info'}>내정보</Link></li>
                  <li><Link to={'/mypage/settings'}>정보수정</Link></li>
                  <li><Link to={'/mypage/unsubscribe'}>회원탈퇴</Link></li>
                </ol>
              </li>
              <li>
                <NavLink to={'/login'} className={({isActive}) => isActive ? 'on' : undefined}>로그인</NavLink>
              </li>
            </ul>
          </Navigation>
        </Container>
      </div>
    </HeaderContainer>
  )
}

export default Header
