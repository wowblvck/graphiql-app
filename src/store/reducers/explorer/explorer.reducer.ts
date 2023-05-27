import { ExplorerRoute } from '@/types/explorer-nav.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OperationTypeNode } from 'graphql';

type ExplorerType = {
  routes: {
    route: ExplorerRoute;
    name: string;
    type?: OperationTypeNode | null;
    history: Pick<ExplorerType['routes'], 'route' | 'name' | 'type'>[];
  };
};
const initialState: ExplorerType = {
  routes: {
    route: ExplorerRoute.Docs,
    name: 'Docs',
    type: null,
    history: [],
  },
};

const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    addRoute: (
      state,
      action: PayloadAction<Pick<ExplorerType['routes'], 'route' | 'name' | 'type'>>
    ) => {
      const { route, name, type } = state.routes;
      const { route: routeAction, name: nameAction, type: typeAction } = action.payload;
      state.routes.route = routeAction;
      state.routes.name = nameAction;
      state.routes.type = typeAction;
      state.routes.history.push({
        route: route,
        name: name,
        type: type,
      });
    },
    removeRoute: (state) => {
      const { history } = state.routes;
      state.routes.route = history[history.length - 1].route;
      state.routes.name = history[history.length - 1].name;
      state.routes.type = history[history.length - 1].type;
      state.routes.history.pop();
    },
    clearExplorer: (state) => {
      state.routes.route = ExplorerRoute.Docs;
      state.routes.name = 'Docs';
      state.routes.type = null;
      state.routes.history = [];
    },
  },
});

export const { addRoute, removeRoute, clearExplorer } = explorerSlice.actions;
export default explorerSlice.reducer;
