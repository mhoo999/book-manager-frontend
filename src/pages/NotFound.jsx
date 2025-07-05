import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/', { replace: true })
  }, 3100)
  return <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
}

export default NotFound
