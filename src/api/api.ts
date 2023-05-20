import { BASE_URL } from '@/constants/settings.config';
import { IntrospectionType, QueryVariablesType } from '@/types/api.types';
import {
  buildASTSchema,
  buildClientSchema,
  getIntrospectionQuery,
  parse,
  printSchema,
} from 'graphql';

export const fetchGraphQLSchema = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
        operationName: 'IntrospectionQuery',
      }),
    });
    const { data }: IntrospectionType = await response.json();
    const schema = buildClientSchema(data);
    return buildASTSchema(parse(printSchema(schema)));
  } catch (error) {
    console.error(`fetchGraphQLSchema => ${error}`);
  }
};

export const queryFetch = async (query: string, variables?: QueryVariablesType) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`queryFetch => ${error}`);
  }
};
