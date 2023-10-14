import { app } from './app'
import { apolloServer } from './apolloServer'

apolloServer.applyMiddleware({ app, cors: false })

export { apolloServer }
