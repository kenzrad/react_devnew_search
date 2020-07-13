import React from 'react';
import { Nav } from './components/Nav';
import { SearchResults } from './features/search/SearchResults';


function App() {
  return (
    <div className="App">
      <Nav />
      <SearchResults/>
    </div>
  );
}

export default App;
