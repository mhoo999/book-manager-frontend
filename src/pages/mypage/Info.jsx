import { useParams } from 'react-router-dom'

const Info = () => {
  const { id } = useParams()
  return (
    <>
      <h2>Info</h2>
      <h3>id : {id}</h3>
    </>
  )
}

export default Info
