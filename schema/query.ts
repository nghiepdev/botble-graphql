import {queryField} from 'nexus';
import {prop, path} from 'ramda';

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

export const newestListQuery = queryField(t => {
  t.list.field('newestListing', {
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

export const postBySlug = queryField('postBySlug', {
  type: 'Post',
  args: slugArg,
  resolve(_, {slug}, ctx) {
    return ctx.client.get(`posts/${slug}`).then(path(['body', 'data']));
  },
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

export const galleryBySlug = queryField('galleryBySlug', {
  type: 'Gallery',
  args: slugArg,
  resolve(_, {slug}, ctx) {
    return ctx.client
      .get(`gallery/${slug}`)
      .then(prop('body'))
      .then(({data, images}: any) => ({
        ...data,
        images,
      }));
  },
});

export const author = queryField('author', {
  type: 'String',
  resolve(_, args, ctx) {
    if (ctx.__PROD__) {
      return require('../../package.json').author;
    }

    return require('../package.json').author;
  },
});
