import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchValue, selectSearchResults } from './searchSlice';
import { SearchHistory } from './SearchHistory';

export function SearchResults () {
  const articles = useSelector(selectSearchResults);
  const value = useSelector(selectSearchValue);
  return (
    <div className="px-2">
      <div className="row p-2">
        <div className="col">
          <h3>{!!value ? articles.length + ' Results for: "' + value + '"' : 'Top Stories' }</h3>
        </div>
        <div className="col">
          <SearchHistory />
        </div>
      </div>
      <div className="row p-2 border-bottom">
        <div className="col-3"><strong>Article ID</strong></div>
        <div className="col-6"><strong>Title/Link</strong></div>
        <div className="col-3"><strong>Author</strong></div>
      </div>
      {articles.map(article => (
        <div key={article.id} className="row p-2 border-bottom">
          <div className="col-3">{article.id}</div>
          <div className="col-6"><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></div>
          <div className="col-3">{article.author}</div>
        </div>
      ))}
    </div>
  );
}