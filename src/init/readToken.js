import {USER_SECRET} from './config'
import jwt from 'jsonwebtoken'

export const readToken = (req, res, next) => {
  const { token } = req.session

  if (token) {
    const { username } = jwt.verify(token, USER_SECRET)
    req.username = username
  }

  next()
}
