import {intArg, stringArg} from 'nexus';

export const limitArg = {
  limit: intArg({
    default: 20,
    description: 'The limit of results. Default 20',
  }),
};

export const slugArg = {
  slug: stringArg({
    required: true,
  }),
};

export const idArg = {
  id: intArg({
    required: true,
  }),
};
