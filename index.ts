import path from 'path';
import {makeSchema, connectionPlugin} from 'nexus';
import {GraphQLServer} from 'graphql-yoga';

import * as types from './schema';
import {client} from './helpers/fetcher';

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: path.join(__dirname, './schema.graphql'),
    typegen: path.join(__dirname, './types.d.ts'),
  },
  prettierConfig: path.join(__dirname.replace(/\/dist$/, ''), './.prettierrc'),
  plugins: [
    connectionPlugin({
      includeNodesField: true,
      extendConnection: {
        totalCount: {type: 'Int'},
      },
    }),
  ],
});

const server = new GraphQLServer({
  schema,
  context: {
    client,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
