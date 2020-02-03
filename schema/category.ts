import {objectType} from 'nexus';

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
