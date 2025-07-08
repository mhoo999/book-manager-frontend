import { Navigate, useParams } from 'react-router-dom'
import useCustomLogin from '../../hooks/useCustomLogin'

const MyPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin()
  const { id } = useParams()

  if (!isLogin) {
    alert('로그인후 사용할 수 있습니다.')
    return moveToLoginReturn()
  }

  const isLoggedIn = false

  if (!isLoggedIn) {
    // return <Navigate to={'/'} replace={true} />
  }

  return (
    <>
      <h2>마이페이지</h2>
      <hr />
      <h3>아아디 : {id}</h3>
    </>
  )
}

export default MyPage
