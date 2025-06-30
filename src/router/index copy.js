import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ErrorPage from '../pages/ErrorPage'
import Loading from '../pages/Loading'
import Layout from '../Layout'
import NotFound from '../pages/NotFound'

const Home = lazy(() => import('../pages/home/Home'))
const SearchBook = lazy(() => import('../pages/search/SearchBook'))
const RentalList = lazy(() => import('../pages/rental/RentalList'))
const OverdueList = lazy(() => import('../pages/rental/OverdueList'))
const WishList = lazy(() => import('../pages/wish/WishList'))
const RegistWish = lazy(() => import('../pages/wish/RegistWish'))
const Board = lazy(() => import('../pages/center/Board'))
const MyPage = lazy(() => import('../pages/MyPage'))
const Info = lazy(() => import('../pages/mypage/Info'))

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
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/searchbook',
        element: (
          <Suspense fallback={<Loading />}>
            <SearchBook />
          </Suspense>
        ),
      },
      {
        path: '/rentalstate',
        element: (
          <Suspense fallback={<Loading />}>
            <RentalList />
          </Suspense>
        ),
        children: [
          {
            path: '/rentallist',
            element: (
              <Suspense fallback={<Loading />}>
                <RentalList />
              </Suspense>
            ),
          },
          {
            path: '/overduelist',
            element: (
              <Suspense fallback={<Loading />}>
                <OverdueList />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/whislist',
        element: (
          <Suspense fallback={<Loading />}>
            <WishList />
          </Suspense>
        ),
        children: [
          {
            path: '/registwish',
            element: (
              <Suspense fallback={<Loading />}>
                <RegistWish />
              </Suspense>
            ),
          },
          {
            path: '/registwish',
            element: (
              <Suspense fallback={<Loading />}>
                <RegistWish />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/customercenter',
        element: (
          <Suspense fallback={<Loading />}>
            <Board />
          </Suspense>
        ),
      },
      {
        path: '/mypage',
        element: (
          <Suspense fallback={<Loading />}>
            <MyPage />
          </Suspense>
        ),
        children: [
          {
            path: ':id',
            element: <Info />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
