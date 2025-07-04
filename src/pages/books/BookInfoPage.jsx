import { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { bookInfo } from '../../api/books/bookApi'

const BookInfoPage = () => {
  const { bookId } = useParams()

  const [searchParam, setSearchParam] = useSearchParams()
  const page = searchParam.get('page') ? parseInt(searchParam.get('page')) : 1
  const size = searchParam.get('size') ? parseInt(searchParam.get('size')) : 10

  const [book, setBook] = useState({})

  useEffect(() => {
    //서버요청
    bookInfo(bookId).then((res) => {
      setBook(res.data)
    })
  }, [bookId])

  useEffect(() => {
    console.log('book=', book)
  }, [book])

  return <h2>BookPage - {bookId}</h2>
}

export default BookInfoPage
