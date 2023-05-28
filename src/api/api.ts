import { BASE_URL } from '@/constants/settings.config';
import { GraphQLClient, gql } from 'graphql-request';

export const fetchGraphQLQuery = async (queryStr: string, variables?: string) => {
  try {
    const graphQLClient = new GraphQLClient(BASE_URL, {
      credentials: 'include',
      mode: 'cors',
    });

    const query = gql`
      ${queryStr}
    `;

    const vars = variables ? JSON.parse(variables) : null;

    const data = await graphQLClient.request(query, vars);
    return data;
  } catch (error) {
    return error;
  }
};
