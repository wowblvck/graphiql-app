import { BASE_URL } from '@/constants/settings.config';
import { IntrospectionType } from '@/types/api.types';
import {
  buildASTSchema,
  buildClientSchema,
  getIntrospectionQuery,
  parse,
  printSchema,
} from 'graphql';
import { GraphQLClient, gql } from 'graphql-request';

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

export const fetchGraphQLQuery = async (queryStr: string, variables?: string) => {
  try {
    const graphQLClient = new GraphQLClient(BASE_URL, {
      credentials: 'include',
      mode: 'cors',
    });

    const query = gql`
      ${queryStr}
    `;

    const vars = variables ? JSON.parse(variables) : {};
    const data = await graphQLClient.request(query, vars);
    return data;
  } catch (e) {
    return e;
  }
};
