import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import Layout from '../layout/Layout'
import searchRouter from './searchRouter'
import csRouter from './csRouter'
import rentalRouter from './rentalRouter'
import wishRouter from './wishRouter'
import myRouter from './myRouter'

//Suspense와 lazy를 이용한 Code-Splitting
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const Home = lazy(() => import('../pages/home/IndexPage'))
const IndexPage = lazy(() => import('../pages/books/IndexPage'))
const RentalState = lazy(() => import('../pages/rental/IndexPage'))
const WishBook = lazy(() => import('../pages/wish/IndexPage'))
const CsCenter = lazy(() => import('../pages/cs/IndexPage'))
const MyPage = lazy(() => import('../pages/mypage/IndexPage'))

const NotFound = lazy(() => import('../pages/NotFound'))

const Login = lazy(() => import('../pages/auth/LoginPage'))
const Logout = lazy(() => import('../pages/auth/LogoutPage'))
/*
	v7 방식대로 했을 때의 장점

	데이터 로딩 통합 : 라우트 정의에 loader 함수를 직접 연결해 데이터 페칭이 더 효율적으로 처리된다
	에러 처리 개선 - 각 라우트마다 독립적인 에러 처리가 가능해져서 앱의 안정성이 높아진다
	코드 구조 개선 - 모든 라우트 정의가 한 곳에 중앙화되어 앱 구조 파악이 쉬워진다
	타입 안정성 - 객체 기반 정의가 TypeScript와 더 잘 작동해 개발 시 오류가 줄어든다
*/

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'books',
        element: <IndexPage />,
        children: searchRouter(),
      },
      {
        path: 'rental',
        element: <RentalState />,
        children: rentalRouter(),
      },
      {
        path: 'wish',
        element: <WishBook />,
        children: wishRouter(),
      },
      {
        path: 'cs',
        element: <CsCenter />,
        children: csRouter(),
      },
      {
        path: 'mypage',
        element: <MyPage />,
        children: myRouter(),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
