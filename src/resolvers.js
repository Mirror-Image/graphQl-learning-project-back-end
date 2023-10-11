import {getBooks, getBookById, saveBook, removeBook, updateBook} from './model'

const resolvers = {
  Query: {
    books: getBooks,
    book: (_, { id }) => getBookById(id),
  },
  Mutation: {
    addBook: (_, { book }) => saveBook(book),
    removeBook: (_, { id }) => removeBook(id),
    updateBook: (_, { id, book }) => updateBook(id, book)
  }
}

export { resolvers }
