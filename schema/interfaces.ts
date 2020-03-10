import {interfaceType} from 'nexus';
import {compose, prop} from 'ramda';

export const Node = interfaceType({
  name: 'Node',
  definition(t) {
    t.id('id', {description: 'Unique identifier for the resource'});
    t.resolveType(() => null);
  },
});

export const CreatedAt = interfaceType({
  name: 'CreatedAt',
  definition(t) {
    t.datetime('createdAt', {
      resolve: compose(date => new Date(date), prop('created_at')),
    });
    t.resolveType(() => null);
  },
});
