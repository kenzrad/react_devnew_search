import { createSlice } from '@reduxjs/toolkit';
import { reduceAndSliceArr } from '../../utils/arrUtils'

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    value: '',
    history: [],
    results: []
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
      if (!!action.payload) {
        state.history.push(action.payload);
        state.history = reduceAndSliceArr(state.history);
      }
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    }
  },
});

export const { setSearchValue, setSearchResults } = searchBarSlice.actions;

export const selectSearchValue = state => state.search.value;
export const selectSearchHistory = state => state.search.history;
export const selectSearchResults = state => state.search.results;

export default searchBarSlice.reducer;
