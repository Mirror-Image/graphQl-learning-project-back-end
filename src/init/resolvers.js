import { queries as bookQueries } from '../bus/books/queries'
import { mutations as bookMutations } from '../bus/books/mutations'

const resolvers = {
  Query: {
    ...bookQueries,
  },
  Mutation: {
    ...bookMutations,
  },
}

export { resolvers }
