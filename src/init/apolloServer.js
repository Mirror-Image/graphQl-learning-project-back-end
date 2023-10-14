import { ApolloServer } from 'apollo-server-express'
import { resolvers } from '../resolvers'
import schema from './types.graphql'
import { api as starshipsAPI } from '../bus/starships/dataSource'

const apolloServer = new ApolloServer({
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

const { graphqlPath, subscriptionsPath } = apolloServer

export { apolloServer, graphqlPath, subscriptionsPath }
