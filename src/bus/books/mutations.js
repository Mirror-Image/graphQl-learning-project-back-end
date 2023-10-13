import { removeBook, saveBook, updateBook } from './model'
import {pubSub} from '../../init/pubSub'
import {events} from './events'

export const mutations = {
  addBook: (_, { book }) => {
    const savedBook = saveBook(book)
    pubSub.publish(events.BOOK_ADDED, {
      bookAdded: savedBook
    })

    return savedBook
  },
  removeBook: (_, { id }) => removeBook(id),
  updateBook: (_, { id, book }) => {
    const updatedBook = updateBook(id, book)
    pubSub.publish(events.BOOK_UPDATED, {
      bookUpdated: updatedBook
    })

    return updatedBook
  }
}
