import http from 'http'
import { apolloServer } from './applyMiddleware'
import { app } from './app'

const server = http.createServer(app)
apolloServer.installSubscriptionHandlers(server)

export { server }
