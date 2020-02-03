import {objectType} from 'nexus';

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
    t.date('created_at');
    t.list.field('categories', {
      type: 'Category',
      resolve: (_, {categories}) => categories,
    });
  },
});
