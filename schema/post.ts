import {objectType} from 'nexus';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id', {description: 'The id of the post'});
  },
});
