import { IntrospectionQuery } from 'graphql';

export type IntrospectionType = {
  data: IntrospectionQuery;
};

export type QueryVariablesType = {
  filter: {
    name: string;
  };
};

export type FilterCharacter = {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};
export type FilterLocation = {
  name?: string;
  type?: string;
  dimension?: string;
};
export type FilterEpisode = {
  name?: string;
  episode?: string;
};

export type VariablesType = {
  page: number;
  filter: FilterCharacter | FilterLocation | FilterEpisode;
};
