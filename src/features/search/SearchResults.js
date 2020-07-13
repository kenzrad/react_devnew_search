import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchValue, selectSearchResults, selectSearchHistory} from './searchSlice';

export function SearchResults () {
  const articles = useSelector(selectSearchResults);
  // const value = useSelector(selectSearchValue);
  return (
    <div className="px-2">
      <div className="row p-2 border-bottom">
        <div className="col-3"><strong>Article ID</strong></div>
        <div className="col-6"><strong>Title/Link</strong></div>
        <div className="col-3"><strong>Author</strong></div>
      </div>
      {articles.map(article => (
        <div key={article.id} className="row p-2 border-bottom">
          <div className="col-3">{article.id}</div>
          <div className="col-6"><a href={article.url}>{article.title}</a></div>
          <div className="col-3">{article.author}</div>
        </div>
      ))}
    </div>
  );
}