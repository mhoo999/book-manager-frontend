import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const QnaPage = lazy(() => import('../pages/cs/QnaPage'))
const QnaContent = lazy(() => import('../pages/cs/QnaContent'))
const FaqPage = lazy(() => import('../pages/cs/FaqPage'))
const NoticePage = lazy(() => import('../pages/cs/NoticePage'))
const NoticeContent = lazy(() => import('../pages/cs/NoticeContent'))

const csRouter = () => {
  return [
    {
      path: '',
      element: <Navigate to={'qna'} replace />,
    },
    {
      path: 'qna',
      element: <QnaPage />,
    },
    {
      path: 'qna/:questionId',
      element: <QnaContent />,
    },
    {
      path: 'faq',
      element: <FaqPage />,
    },
    {
      path: 'notice',
      element: <NoticePage />,
    },
    {
      path: 'notice/:noticeId',
      element: <NoticeContent />,
    },
  ]
}

export default csRouter
