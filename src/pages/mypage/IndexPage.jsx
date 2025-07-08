import { Navigate, useParams } from 'react-router-dom'

const MyPage = () => {
  const { id } = useParams()
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
