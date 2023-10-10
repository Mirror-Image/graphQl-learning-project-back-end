import { getBooks, getBookById } from './model'

const resolvers = {
  Query: {
    books: getBooks,
    book: (_, { id }) => getBookById(id),
  }
}

export { resolvers }
