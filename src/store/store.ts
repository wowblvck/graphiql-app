import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user/user.reducer';
import explorer from './reducers/explorer/explorer.reducer';
import editor from './reducers/editor/editor.reducer';
import { graphqlApi } from './reducers/api/api.reducer';

const store = configureStore({
  reducer: {
    user,
    explorer,
    editor,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(graphqlApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
