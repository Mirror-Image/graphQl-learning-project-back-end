import { queries as bookQueries } from '../bus/books/queries'
import { queries as starshipQueries } from '../bus/starships/queries'
import { queries as userQueries } from '../bus/users/queries'
import { mutations as bookMutations } from '../bus/books/mutations'
import { mutations as userMutations } from '../bus/users/mutations'

const resolvers = {
  Query: {
    ...bookQueries,
    ...starshipQueries,
    ...userQueries,
  },
  Mutation: {
    ...bookMutations,
    ...userMutations,
  },
}

export { resolvers }
