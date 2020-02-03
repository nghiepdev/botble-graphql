import {queryField} from 'nexus';
import {path} from 'ramda';

import {limitArg} from './arguments';
import {client} from '../helpers/fetcher';

export const featuredListQuery = queryField(t => {
  t.list.field('featuredListing', {
    type: 'Post',
    args: limitArg,
    resolve(root, {limit}) {
      return client
        .get('posts/featured', {
          searchParams: {limit},
        })
        .then(path(['body', 'data']));
    },
  });
});
