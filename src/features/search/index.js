import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue, setSearchResults } from './searchSlice';
import axios from 'axios';
import { removeSpecialCharacters } from '../../utils/strUtils'

export function Search() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Get request to Hacker News API, add articles object to state
   * @param {string} type - query type (e.g., search, search)
   * @param {string} query
   */
  function fetchArticles(type, query) {
    // In a full size app, I would add this as a services to a services folder so it can be easily found and reused (with an api services helper to create request url and assign methods)
    const BASE_URL = 'https://hn.algolia.com/api/v1/';
    // if a sorting feature is added to the search, would at to url builder (for now, always search?query unless the query is blank)
    const queryTypeMap = {
      FEATURED: 'search?tags=front_page',
      SEARCH: 'search?query=',
      SEARCH_DATE: 'search_by_date?query='
    }
  
    let url = BASE_URL;
    if (query && type && queryTypeMap[type] !== -1) {
        url += (queryTypeMap[type] + query);
    } else {
        url += queryTypeMap.FEATURED;
    }

    axios.get(url).then(res => {
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
      // error log
    });
  }

  /**
   * Set search state values and fires api request function (handles falsey query values)
   * @param {String} query - can be empty string
   */
  function submitSearch(e, query) {
    e.preventDefault();
    dispatch(setSearchValue(query));
    fetchArticles('SEARCH', query);
    setSearchQuery('');
  };

  return (
    <form className="form-inline" onSubmit={(e) => submitSearch(e, removeSpecialCharacters(searchQuery))}>
        <input
          className="form-control input-lg"
          aria-label="Search query field"
          value={searchQuery}
          placeholder="Search Hacker News"
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="btn btn-dark ml-2"
        >
          Search
        </button>
    </form>
  );
}