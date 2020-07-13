import React from 'react';
import { Search } from '../../features/search';

export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="https://github.com/kenzrad/react-search-news">Hacker News API Search</a>
            <div className="ml-auto"><Search /></div>
        </nav>
    )
}