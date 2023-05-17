import { createSlice } from '@reduxjs/toolkit';
import { GraphQLSchema } from 'graphql';

type GraphqlType = {
  schema: GraphQLSchema | null;
};
const initialState: GraphqlType = {
  schema: null,
};

const graphqlSlice = createSlice({
  name: 'graphql',
  initialState,
  reducers: {},
});

// export const {} = graphqlSlice.actions;
export default graphqlSlice.reducer;
