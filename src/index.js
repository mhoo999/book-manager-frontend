import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Loading from './pages/Loading'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 라우터 내부 컴포넌트를 개별로 감싸는 중복이 사라지고, 전역 Suspense 처리가 가능
root.render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>,
)
