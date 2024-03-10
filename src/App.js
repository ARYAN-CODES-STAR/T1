// App.js

import React, { useState, useEffect } from "react";
import './App.css'; // Import your CSS file for styling
import BeerCard from './BeerCard'; // Import BeerCard component

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Punk Beers</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search beers..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="beer-grid">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
