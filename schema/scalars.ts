import {asNexusMethod} from 'nexus';
import {GraphQLDate, GraphQLTime, GraphQLDateTime} from 'graphql-iso-date';

export const GQLDate = asNexusMethod(GraphQLDate, 'date');
export const GQLTime = asNexusMethod(GraphQLTime, 'time');
export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'datetime');
