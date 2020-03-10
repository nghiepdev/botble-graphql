import {objectType, queryField} from 'nexus';
import {prop} from 'ramda';

import {limitArg, slugArg} from './arguments';

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

export const galleryList = queryField('galleryList', {
  type: 'Gallery',
  list: true,
  args: limitArg,
  resolve(_, {limit}, ctx) {
    return ctx.client
      .get('gallery/featured', {
        searchParams: {limit},
      })
      .then(prop('data'));
  },
});

export const gallery = queryField('gallery', {
  type: 'Gallery',
  args: slugArg,
  resolve(_, {slug}, ctx) {
    return ctx.client.get(`gallery/${slug}`).then(({data, images}: any) => ({
      ...data,
      images,
    }));
  },
});
