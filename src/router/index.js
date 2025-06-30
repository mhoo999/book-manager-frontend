import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '../Layout'
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const Home = lazy(() => import('../pages/Home'))
const SearchBook = lazy(() => import('../pages/SearchBook'))
const RentalState = lazy(() => import('../pages/RentalState'))
const WishBook = lazy(() => import('../pages/WishBook'))
const CSCenter = lazy(() => import('../pages/CSCenter'))
const MyPage = lazy(() => import('../pages/MyPage'))
const Login = lazy(() => import('../pages/Login'))
const NotFound = lazy(() => import('../pages/NotFound'))

/*
	v7 방식대로 했을 때의 장점

	데이터 로딩 통합 : 라우트 정의에 loader 함수를 직접 연결해 데이터 페칭이 더 효율적으로 처리된다
	에러 처리 개선 - 각 라우트마다 독립적인 에러 처리가 가능해져서 앱의 안정성이 높아진다
	코드 구조 개선 - 모든 라우트 정의가 한 곳에 중앙화되어 앱 구조 파악이 쉬워진다
	타입 안정성 - 객체 기반 정의가 TypeScript와 더 잘 작동해 개발 시 오류가 줄어든다
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/searchbook',
        element: <SearchBook />,
      },
      {
        path: '/rentalstate',
        element: <RentalState />,
      },
      {
        path: '/wishbook',
        element: <WishBook />,
      },
      {
        path: '/cscenter',
        element: <CSCenter />,
      },
      {
        path: '/mypage/:id',
        element: <MyPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
