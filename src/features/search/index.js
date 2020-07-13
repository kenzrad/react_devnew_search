import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue, setSearchResults, selectSearchValue} from './searchSlice';
import axios from 'axios';

export function Search() {
  const search = useSelector(selectSearchValue);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('test');

  /**
   * Get request to Hacker News API, add articles object to state
   * @param {string} type - query type (e.g., search, search)
   * @param {string} query
   */
  function fetchArticles(type, query) {
    const BASE_URL = 'http://hn.algolia.com/api/v1/';
    const queryTypeMap = {
      FEATURED: 'topstories',
      SEARCH: 'search?query=',
      SEARCH_DATE: 'search_by_date?query='
    }

    let searchResults;
    let url = BASE_URL;
    if (query && type && queryTypeMap[type] !== -1) {
        url += (queryTypeMap[type] + query);
    } else {
        url += queryTypeMap.FEATURED;
    }

    axios.get(url).then(res => {
      console.log(res.data.hits);
      let searchResults = [];
      if (res.data && res.data.hits) {
        for (var i = 0; i < res.data.hits.length; i++) {
          searchResults.push({
            title: res.data.hits[i].title,
            url: res.data.hits[i].url,
            timestamp: res.data.hits[i].created_at,
            id: res.data.hits[i].objectID,
            author: res.data.hits[i].author,
            relevancyScore: res.data.hits[i].relevancy_score
          });
        }
      }
      dispatch(setSearchResults(searchResults));
    }).catch(function (error) {
      console.log(error);
    });
  }

  function submitSearch(query) {
    dispatch(setSearchValue(query));
    fetchArticles('SEARCH', query);
  };

  return (
    <div className="form-inline">
        <input
          className="form-control"
          aria-label="Search query field"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button 
          type="button" 
          className="btn btn-dark ml-2"
          onClick={() => submitSearch(searchQuery)}
        >
          Search
        </button>
    </div>
  );
}