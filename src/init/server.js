import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './resolvers'
import schema from './schema.graphql'

const app = express()

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.applyMiddleware({ app })

export { server, app }
