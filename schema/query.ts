import {queryType} from 'nexus';

export const Query = queryType({
  definition(t) {
    t.field('ok', {
      type: 'String',
      resolve: () => 'ok',
    });
  },
});
