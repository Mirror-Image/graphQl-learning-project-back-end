import {db} from './db'
import {AuthenticationError} from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import {USER_SECRET} from '../../init/config'

export const mutations = {
  signUp: (_, user) => {
    db.push(user)

    return user
  },
  login: (_, { name, password }, context) => {
    const currentUser = db.find((user) => user.name === name)
    const errorMessage = 'Your credentials is wrong!'

    if (!currentUser) {
      throw new AuthenticationError(errorMessage)
    }

    const isUserValid = currentUser.password === password

    if (!isUserValid) {
      throw new AuthenticationError(errorMessage)
    }

    context.req.session.token = jwt.sign({ username: name }, USER_SECRET)

    return currentUser
  }
}
