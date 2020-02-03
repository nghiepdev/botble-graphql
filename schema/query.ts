import {queryField} from 'nexus';
import {path} from 'ramda';

import {limitArg, slugArg, idArg} from './arguments';

export const featuredListQuery = queryField(t => {
  t.list.field('featuredListing', {
    type: 'Post',
    args: limitArg,
    resolve(_, {limit}, ctx) {
      return ctx.client
        .get('posts/featured', {
          searchParams: {limit},
        })
        .then(path(['body', 'data']));
    },
  });
});

export const lastestListQuery = queryField(t => {
  t.list.field('lastestListing', {
    type: 'Post',
    args: limitArg,
    resolve(_, {limit}, ctx) {
      return ctx.client
        .get('posts/lastest', {
          searchParams: {limit},
        })
        .then(path(['body', 'data']));
    },
  });
});

export const recentListQuery = queryField(t => {
  t.list.field('recentListing', {
    type: 'Post',
    args: limitArg,
    resolve(_, {limit}, ctx) {
      return ctx.client
        .get('posts/recent-posts', {
          searchParams: {limit},
        })
        .then(path(['body', 'data']));
    },
  });
});

export const galleryListQuery = queryField(t => {
  t.list.field('galleryListing', {
    type: 'Gallery',
    args: limitArg,
    resolve(_, {limit}, ctx) {
      return ctx.client
        .get('gallery/featured', {
          searchParams: {limit},
        })
        .then(path(['body', 'data']));
    },
  });
});

export const categoryBySlug = queryField('categoryBySlug', {
  type: 'Category',
  args: slugArg,
  resolve(_, {slug}, ctx) {
    return ctx.client.get(`category/${slug}`).then(path(['body', 'data']));
  },
});

export const postsByCategoryId = queryField(t => {
  t.list.field('postsByCategoryId', {
    type: 'Post',
    args: idArg,
    resolve(_, {id}, ctx) {
      return ctx.client
        .get(`posts/${id}/category`)
        .then(path(['body', 'data']));
    },
  });
});

export const postConnectionByCategoryId = queryField(t => {
  t.connectionField('postConnectionByCategoryId', {
    type: 'Post',
    additionalArgs: idArg,
    resolve(_, args) {
      console.log(args);
      return {
        totalCount: 20,
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: false,
        },
        nodes: [],
      };
    },
    totalCount: () => 0,
  });
});
