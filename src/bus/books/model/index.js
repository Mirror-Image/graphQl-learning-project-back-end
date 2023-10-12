import { v4 } from 'uuid'
import { booksDB } from './db'

export const getBooks = () => {
  const books = []

  booksDB.forEach((book, key) => {
    books.push({
      id: key,
      ...book,
    })
  })

  return books
}

export const getBookById = (id) => {
  const book = booksDB.get(id)

  if (!book) {
    throw new Error(`We don't have a book with id: ${id}`)
  }

  return {
    ...book,
    id,
  }
}

export const saveBook = (book) => {
  const id = v4()
  booksDB.set(id, book)
  return getBookById(id)
}

export const removeBook = (id) => {
  const removedBook = getBookById(id)
  booksDB.delete(id)

  return removedBook
}

export const updateBook = (id, bookUpdates) => {
  const book = booksDB.get(id)
  const updatedBook = {
    ...book,
    ...bookUpdates,
  }

  booksDB.delete(id)
  booksDB.set(id, updatedBook)

  return getBookById(id)
}
