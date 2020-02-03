import {objectType} from 'nexus';

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.implements('Node');
    t.string('name');
    t.string('slug');
    t.string('description', {
      nullable: true,
    });
  },
});
