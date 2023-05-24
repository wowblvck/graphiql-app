import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type EditorType = {
  responseValue: string;
  variablesValue: string;
  isVariablesOpen: string[];
};
const initialState: EditorType = {
  responseValue: '',
  variablesValue: '',
  isVariablesOpen: [],
};

const editorSLice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<string>) => {
      state.responseValue = action.payload;
    },
    setVariables: (state, action: PayloadAction<string>) => {
      state.variablesValue = action.payload;
    },
    setIsVariablesOpen: (state, action: PayloadAction<string[]>) => {
      state.isVariablesOpen = action.payload;
    },
  },
});

export const { setResponse, setVariables, setIsVariablesOpen } = editorSLice.actions;
export default editorSLice.reducer;
