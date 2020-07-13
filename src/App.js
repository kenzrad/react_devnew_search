import React from 'react';
import { Nav } from './components/Nav';
import { SearchResults } from './features/search/SearchResults';
import { SearchHistory } from './features/search/SearchHistory';

function App() {
  return (
    <div className="App">
      <header className="px-2">
        <Nav />
      </header>
      <SearchHistory/>
      <SearchResults/>
    </div>
  );
}

export default App;
