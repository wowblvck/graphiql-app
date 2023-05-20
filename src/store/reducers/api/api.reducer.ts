import { BASE_URL } from '@/constants/settings.config';
import { VariablesType } from '@/types/api.types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { IntrospectionQuery, getIntrospectionQuery } from 'graphql';
import { gql } from 'graphql-request';

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: graphqlRequestBaseQuery({ url: BASE_URL }),
  endpoints: (builder) => ({
    getGraphQLSchema: builder.query<IntrospectionQuery, void>({
      query: () => ({
        document: gql`
          ${getIntrospectionQuery()}
        `,
      }),
    }),
    getGraphQL: builder.query<string, { query: string; variables?: VariablesType }>({
      query: ({ query, variables }) => ({
        document: gql`
          ${query}
        `,
        variables: variables,
      }),
    }),
  }),
});

export const { useGetGraphQLSchemaQuery, useGetGraphQLQuery } = graphqlApi;
