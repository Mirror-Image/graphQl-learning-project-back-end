import { queries as bookQueries } from '../bus/books/queries'
import { queries as starshipQueries } from '../bus/starships/queries'
import { queries as userQueries } from '../bus/users/queries'
import { mutations as bookMutations } from '../bus/books/mutations'
import { mutations as userMutations } from '../bus/users/mutations'
import { subscriptions as userSubscriptions } from '../bus/users/subscriptions'
import { subscriptions as bookSubscriptions } from '../bus/books/subscriptions'

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
  Subscription: {
    ...userSubscriptions,
    ...bookSubscriptions,
  }
}

export { resolvers }
