import {objectType, queryField} from 'nexus';
import {prop} from 'ramda';

import {limitArg, slugArg, idArg} from './arguments';

export const Post = objectType({
  name: 'Post',
  definition(t: any) {
    t.implements('Node', 'CreatedAt');
    t.string('name');
    t.string('slug');
    t.string('description', {
      nullable: true,
    });
    t.string('content', {
      nullable: true,
    });
    t.string('image', {nullable: true});
    t.list.field('categories', {
      type: 'Category',
      resolve: prop('categories'),
    });
  },
});

export const featuredList = queryField('featuredList', {
  type: 'Post',
  list: true,
  args: limitArg,
  resolve(_, {limit}, ctx) {
    return ctx.client
      .get('posts/featured', {
        searchParams: {limit},
      })
      .then(prop('data'));
  },
});

export const newestList = queryField('newestList', {
  type: 'Post',
  list: true,
  args: limitArg,
  resolve(_, {limit}, ctx) {
    return ctx.client
      .get('posts/lastest', {
        searchParams: {limit},
      })
      .then(prop('data'));
  },
});

export const recentList = queryField('recentList', {
  type: 'Post',
  list: true,
  args: limitArg,
  resolve(_, {limit}, ctx) {
    return ctx.client
      .get('posts/recent-posts', {
        searchParams: {limit},
      })
      .then(prop('data'));
  },
});

export const post = queryField('post', {
  type: 'Post',
  args: slugArg,
  resolve(_, {slug}, ctx) {
    return ctx.client.get(`posts/${slug}`).then(prop('data'));
  },
});

export const posts = queryField('posts', {
  type: 'Post',
  list: true,
  args: idArg,
  resolve(_, {id}, ctx) {
    return ctx.client.get(`posts/${id}/category`).then(prop('data'));
  },
});
