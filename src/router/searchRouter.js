import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

//Suspense 와 lazy를 이용한 Code-Splitting

//prettier-ignore
const RecommendedBooks = lazy(() => import('./../components/book/RecommendedBooks'))
const SearchResults = lazy(() => import('./../components/book/SearchResults'))

/*
	v7 방식대로 했을 때의 장점

	데이터 로딩 통합 : 라우트 정의에 loader 함수를 직접 연결해 데이터 페칭이 더 효율적으로 처리된다
	에러 처리 개선 - 각 라우트마다 독립적인 에러 처리가 가능해져서 앱의 안정성이 높아진다
	코드 구조 개선 - 모든 라우트 정의가 한 곳에 중앙화되어 앱 구조 파악이 쉬워진다
	타입 안정성 - 객체 기반 정의가 TypeScript와 더 잘 작동해 개발 시 오류가 줄어든다
*/

const searchRouter = () => {
  return [
    {
      path: '',
      element: <Navigate to={'recommend'} replace />,
    },
    {
      path: 'recommend',
      element: <RecommendedBooks />,
    },
    {
      path: 'search',
      element: <SearchResults />,
    },
  ]
}

export default searchRouter
