import {objectType} from 'nexus';

export const Gallery = objectType({
  name: 'Gallery',
  definition(t) {
    t.implements('Node');
    t.string('name');
    t.string('slug');
    t.string('description', {
      nullable: true,
    });
    t.string('image');
  },
});
