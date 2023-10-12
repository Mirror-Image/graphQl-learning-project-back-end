import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './resolvers'
import schema from './types.graphql'
import { api as starshipsAPI } from '../bus/starships/dataSource'

const app = express()

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => ({
    starshipsAPI
  })
})

server.applyMiddleware({ app })

export { server, app }
