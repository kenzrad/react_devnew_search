import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchHistory} from './searchSlice';

export function SearchHistory () {
  const searchHistory = useSelector(selectSearchHistory);
  return (
    <div>
      <p className="text-muted text-right">Recent searches: {searchHistory.join(', ')}</p>
    </div>
  );
}