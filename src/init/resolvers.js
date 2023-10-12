import { queries as bookQueries } from '../bus/books/queries'
import { queries as starshipQueries } from '../bus/starships/queries'
import { mutations as bookMutations } from '../bus/books/mutations'

const resolvers = {
  Query: {
    ...bookQueries,
    ...starshipQueries,
  },
  Mutation: {
    ...bookMutations,
  },
}

export { resolvers }
