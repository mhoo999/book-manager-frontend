import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const DashBoard = lazy(() => import('../pages/mypage/DashBoard'))
const MyInfo = lazy(() => import('../pages/mypage/MyInfo'))
const Withdraw = lazy(() => import('../pages/mypage/Withdraw'))

const myRouter = () => {
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
      element: <MyInfo />,
    },
    {
      path: 'withdraw',
      element: <Withdraw />,
    },
  ]
}

export default myRouter
