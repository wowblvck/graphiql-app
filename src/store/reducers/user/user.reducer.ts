import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import UserState from './user.types';

const initialState: UserState = {
  id: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserState>) {
      state.id = payload.id;
      state.email = payload.email;
      state.token = payload.token;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
