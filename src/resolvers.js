import {getBooks, getBookById, saveBook} from './model'

const resolvers = {
  Query: {
    books: getBooks,
    book: (_, { id }) => getBookById(id),
  },
  Mutation: {
    addBook: (_, { id, title, author }) => saveBook(title, id, author),
  }
}

export { resolvers }
