import {objectType, queryField} from 'nexus';
import {prop} from 'ramda';

import {slugArg} from './arguments';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.implements('Node');
    t.string('name');
    t.string('slug');
    t.string('description', {
      nullable: true,
    });
  },
});

export const categoryBySlug = queryField('categoryBySlug', {
  type: 'Category',
  args: slugArg,
  resolve(_, {slug}, ctx) {
    return ctx.client.get(`category/${slug}`).then(prop('data'));
  },
});
