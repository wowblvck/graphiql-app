import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user/user.reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { graphqlApi } from './reducers/api/api.reducer';
import graphqlSlice from './reducers/graphql/graphql.reducer';

const store = configureStore({
  reducer: {
    user,
    graphqlSlice,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
