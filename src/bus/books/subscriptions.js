import { pubSub } from '../../init/pubSub'
import { events } from './events'

export const subscriptions = {
  bookAdded: {
    subscribe: () => pubSub.asyncIterator([events.BOOK_ADDED])
  },
  bookUpdated: {
    subscribe: () => pubSub.asyncIterator([events.BOOK_UPDATED])
  }
}
