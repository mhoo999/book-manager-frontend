import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const WishList = lazy(() => import('../pages/wish/WishList'))
const WishApply = lazy(() => import('../pages/wish/WishApply'))
const WishDetail = lazy(() => import('../pages/wish/WishDetail'))

const wishRouter = () => {
  return [
    {
      path: '',
      element: <Navigate to={'list'} replace />,
    },
    {
      path: 'list',
      element: <WishList />,
    },
    {
      path: 'apply',
      element: <WishApply />,
    },
    {
      path: ':wishId',
      element: <WishDetail />,
    },
  ]
}

export default wishRouter
