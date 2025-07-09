import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const RentalSearch = lazy(() => import('../pages/rental/RentalSearch'))
// OverdueList, OverDetail import 제거

const rentalRouter = () => {
  return [
    {
      path: '',
      element: <Navigate to={'search'} replace />,
    },
    {
      path: 'search',
      element: <RentalSearch />,
    },
    {
      path: 'over',
      element: <Navigate to={'/rental/search?rentStatus=OVERDUE'} replace />,
    },
    {
      path: 'over/:overdueId',
      element: <Navigate to={'/rental/search?rentStatus=OVERDUE'} replace />,
    },
  ]
}

export default rentalRouter
