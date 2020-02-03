import {objectType} from 'nexus';
import {compose, prop} from 'ramda';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.implements('Node');
    t.string('name');
    t.string('slug');
    t.string('description', {
      nullable: true,
    });
    t.string('content', {
      nullable: true,
    });
    t.string('image', {nullable: true});
    t.datetime('createdAt', {
      resolve: compose(
        date => new Date(date),
        prop('created_at') as (params: any) => string,
      ),
    });
    t.list.field('categories', {
      type: 'Category',
      resolve: (_, {categories}) => categories,
    });
  },
});
