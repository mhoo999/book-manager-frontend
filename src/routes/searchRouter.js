import { lazy } from 'react'

const SearchPage = lazy(() => import('../pages/books/SearchPage'))
const BookPage = lazy(() => import('../pages/books/BookPage'))

const searchRouter = () => {
  return [
    {
      path: 'search',
      element: <SearchPage />,
    },
    {
      path: ':bookId',
      element: <BookPage />,
    },
  ]
}

export default searchRouter
