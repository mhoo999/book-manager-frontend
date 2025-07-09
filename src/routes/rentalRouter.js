import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const RentalSearch = lazy(() => import('../pages/rental/RentalSearch'))
const OverdueList = lazy(() => import('../pages/rental/OverdueList'))
const OverDetail = lazy(() => import('../pages/rental/OverDetail'))

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
      element: <OverdueList />,
    },
    {
      path: ':overdueId',
      element: <OverDetail />,
    },
  ]
}

export default rentalRouter
