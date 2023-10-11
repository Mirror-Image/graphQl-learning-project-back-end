import { v4 } from 'uuid'

const initialDB = [
  [
    'ID-1',
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    }
  ],
  [
    'ID-2',
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton'
    }
  ]
];

const booksDB = new Map(initialDB);

export const getBooks = () => {
  const books = []

  booksDB.forEach((book, key) => {
    books.push({
      id: key,
      ...book,
    })
  });

  return books
}

export const getBookById = (id) => ({
  ...booksDB.get(id),
  id,
})

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
