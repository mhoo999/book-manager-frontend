import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const DashBoard = lazy(() => import('../pages/mypage/DashBoard'))
const Info = lazy(() => import('../pages/mypage/Info'))
const Withdraw = lazy(() => import('../pages/mypage/Withdraw'))

const mypageRouter = () => {
  return [
    {
      path: '',
      element: <Navigate to={'dash'} replace />,
    },
    {
      path: 'dash',
      element: <DashBoard />,
    },
    {
      path: 'info',
      element: <Info />,
    },
    {
      path: 'withdraw',
      element: <Withdraw />,
    },
  ]
}

export default mypageRouter
