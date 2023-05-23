import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  GraphQLArgument,
  GraphQLField,
  GraphQLFieldMap,
  GraphQLOutputType,
  GraphQLSchema,
} from 'graphql';

type ExplorerType = {
  schema: GraphQLSchema | null;
  fields: GraphQLFieldMap<unknown, unknown> | null;
  currentField: GraphQLField<unknown, unknown, unknown> | null;
  currentArg: GraphQLArgument | null;
  currentFieldType: GraphQLOutputType | null;
  routes: {
    route: string;
    prevRoute: string;
    history: string[];
  };
};
const initialState: ExplorerType = {
  schema: null,
  fields: null,
  currentField: null,
  currentArg: null,
  currentFieldType: null,
  routes: {
    route: 'docs',
    prevRoute: '',
    history: [],
  },
};

const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    // setSchema: (state, action) => {
    //   state.schema = action.payload;
    // },
    // setFields: (state, action) => {
    //   state.fields = action.payload;
    // },
    addRoute: (state, action: PayloadAction<string>) => {
      const { route, history } = state.routes;
      const updatedHistory = [...history, route];
      return {
        ...state,
        routes: {
          ...state.routes,
          route: action.payload,
          prevRoute: route,
          history: updatedHistory,
        },
      };
    },
    removeRoute: (state) => {
      const { history } = state.routes;
      const updatedHistory = [...history];
      const updatedRoute = updatedHistory[updatedHistory.length - 1];
      updatedHistory.pop();
      return {
        ...state,
        routes: {
          ...state.routes,
          route: updatedRoute,
          history: updatedHistory,
        },
      };
    },
  },
});

export const { addRoute, removeRoute } = explorerSlice.actions;
export default explorerSlice.reducer;
