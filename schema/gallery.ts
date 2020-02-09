import {objectType} from 'nexus';
import {prop} from 'ramda';

const GalleryImage = objectType({
  name: 'GalleryImage',
  definition(t) {
    t.string('medium');
    t.string('full');
  },
});

export const Gallery = objectType({
  name: 'Gallery',
  definition(t: any) {
    t.implements('Node');
    t.string('name');
    t.string('slug');
    t.string('description', {
      nullable: true,
    });
    t.string('image');
    t.list.field('images', {
      type: GalleryImage,
      nullable: true,
      resolve: prop('images'),
    });
  },
});
