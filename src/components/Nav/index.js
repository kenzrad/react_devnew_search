import React from 'react';
import { Search } from '../../features/search';

export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Hacker News API Search</a>
            <Search />
        </nav>

    )
}