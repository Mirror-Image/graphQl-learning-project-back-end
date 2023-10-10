import { getBooks } from './model'

const resolvers = {
  Query: {
    books: getBooks
  }
}

export { resolvers }
