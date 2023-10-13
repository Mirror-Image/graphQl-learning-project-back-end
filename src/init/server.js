import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './resolvers'
import schema from './types.graphql'
import { api as starshipsAPI } from '../bus/starships/dataSource'
import { sessionOptions, corsOptions } from './config'
import session from 'express-session'
import cors from 'cors'
import { readToken } from './readToken'
import http from 'http'

const app = express()

app.use(session(sessionOptions))
app.use(cors(corsOptions))
app.use(readToken)

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => ({
    starshipsAPI
  }),
  context: ({ req, res }) => {
    return { req, res }
  },
  playground: {
    settings: {
      "request.credentials": "include"
    }
  }
})

server.applyMiddleware({ app, cors: false })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

export { server, httpServer }
