import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchHistory} from './searchSlice';

export function SearchHistory () {
  const searchHistory = useSelector(selectSearchHistory);
  // const value = useSelector(selectSearchValue);
  return (
    <div>
      <div className="p-2 mb-4">
        Previous searches: {searchHistory.join(', ')}
      </div>
    </div>
  );
}