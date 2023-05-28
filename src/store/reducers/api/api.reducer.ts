import { BASE_URL } from '@/constants/settings.config';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import {
  GraphQLSchema,
  IntrospectionQuery,
  buildClientSchema,
  getIntrospectionQuery,
} from 'graphql';
import { gql } from 'graphql-request';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: graphqlRequestBaseQuery({ url: BASE_URL }),
  endpoints: (builder) => ({
    getGraphQLSchema: builder.query<GraphQLSchema, void>({
      query: () => ({
        document: gql`
          ${getIntrospectionQuery()}
        `,
      }),
      transformResponse: (response: IntrospectionQuery) => {
        const schema = buildClientSchema(response);
        return schema;
      },
    }),
  }),
});

export const { useGetGraphQLSchemaQuery } = graphqlApi;
