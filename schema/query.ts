import {queryType} from 'nexus';

export const Query = queryType({
  definition(t) {
    t.field('author', {
      type: 'String',
      resolve(_, args, ctx) {
        if (ctx.__PROD__) {
          return require('../../package.json').author;
        }

        return require('../package.json').author;
      },
    });
  },
});
