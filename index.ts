import path from 'path';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {makeSchema} from 'nexus';

import client from './utils/client';
import * as types from './schema';
const app = express();
const __PORT__ = process.env.PORT || 4000;

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: path.join(__dirname, './schema.graphql'),
    typegen: path.join(__dirname, './types.d.ts'),
  },
  prettierConfig: path.join(__dirname.replace(/\/dist$/, ''), './.prettierrc'),
});

const server = new ApolloServer({
  schema,
  context(context): object {
    return {
      ...context,
      client,
      __PROD__: process.env.NODE_ENV === 'production',
    };
  },
  introspection: true,
  playground: true,
});
server.applyMiddleware({app, path: '/'});

app.listen({port: __PORT__}, () =>
  // eslint-disable-next-line no-console
  console.log(
    `⚡⚡⚡ Server ready at http://localhost:${__PORT__}${server.graphqlPath}`,
  ),
);
