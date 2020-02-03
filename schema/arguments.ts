import {intArg} from 'nexus';

export const limitArg = {
  limit: intArg({
    default: 20,
    description: 'The limit of results. Default 20',
  }),
};
