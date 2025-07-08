import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const RentalList = lazy(() => import('../pages/rental/RentalList'))
const OverdueList = lazy(() => import('../pages/rental/OverdueList'))
const OverDetail = lazy(() => import('../pages/rental/OverDetail'))

const rentalRouter = () => {
  return [
    {
      path: '',
      element: <Navigate to={'list'} replace />,
    },
    {
      path: 'list',
      element: <RentalList />,
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
