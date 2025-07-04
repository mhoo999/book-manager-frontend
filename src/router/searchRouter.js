import { lazy } from 'react'
import BookInfoPage from '../pages/books/BookInfoPage'

const SearchPage = lazy(() => import('../pages/books/SearchPage'))

const searchRouter = () => {
  return [
    {
      path: 'search',
      element: <SearchPage />,
    },
    {
      path: 'info/:bookId',
      element: <BookInfoPage />,
    },
  ]
}

export default searchRouter
