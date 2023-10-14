import { queries as bookQueries } from '../bus/books/queries'
import { queries as starshipQueries } from '../bus/starships/queries'
import { queries as userQueries } from '../bus/users/queries'

export const Query = {
  ...bookQueries,
  ...starshipQueries,
  ...userQueries,
}
