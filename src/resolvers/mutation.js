import { mutations as bookMutations } from '../bus/books/mutations'
import { mutations as userMutations } from '../bus/users/mutations'

export const Mutation = {
  ...bookMutations,
  ...userMutations,
}
