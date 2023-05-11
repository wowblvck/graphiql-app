import { IntrospectionQuery } from 'graphql';

export type IntrospectionType = {
  data: IntrospectionQuery;
};

export type QueryVariablesType = {
  filter: {
    name: string;
  };
};
