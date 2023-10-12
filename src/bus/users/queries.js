import {db} from './db'

export const queries = {
  users: (_, __, context) => {
    if (context.req.username) {
      return db
    } else {
      return db.map(({ name, email }) => ({
        name,
        email,
        password: null,
      }))
    }

  }
}
