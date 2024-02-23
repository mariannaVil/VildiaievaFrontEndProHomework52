/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { moduleName } from './constants';
import actions from './actions';

const initialState = {
  cards: [],
  loading: false,
  filter: '',
};

export const quizesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      state.filter = payload;
    });
    builder.addCase(thunks.fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.fetchData.fulfilled, (state, { payload }) => {
      state.cards = payload;
      state.loading = false;
    });
  },
});

export default quizesReducer.reducer;
