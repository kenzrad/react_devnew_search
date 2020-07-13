import { createSlice } from '@reduxjs/toolkit';

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
      state.history.push(action.payload);
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
