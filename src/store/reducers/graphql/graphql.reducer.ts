import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  GraphQLArgument,
  GraphQLField,
  GraphQLFieldMap,
  GraphQLOutputType,
  GraphQLSchema,
} from 'graphql';

type GraphqlType = {
  schema: GraphQLSchema | null;
  fields: GraphQLFieldMap<unknown, unknown> | null;
  currentField: GraphQLField<unknown, unknown, unknown> | null;
  currentArg: GraphQLArgument | null;
  currentFieldType: GraphQLOutputType | null;
  docsNav: string[];
};
const initialState: GraphqlType = {
  schema: null,
  fields: null,
  currentField: null,
  currentArg: null,
  currentFieldType: null,
  docsNav: [],
};

const graphqlSlice = createSlice({
  name: 'graphql',
  initialState,
  reducers: {
    // setSchema: (state, action) => {
    //   state.schema = action.payload;
    // },
    // setFields: (state, action) => {
    //   state.fields = action.payload;
    // },
    addDocsRoute: (state, action: PayloadAction<string>) => {
      state.docsNav.push(action.payload);
    },
    removeDocsRoute: (state) => {
      state.docsNav.pop();
    },
  },
});

export const { addDocsRoute, removeDocsRoute } = graphqlSlice.actions;
export default graphqlSlice.reducer;
