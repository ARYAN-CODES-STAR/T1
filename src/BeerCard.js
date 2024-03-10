import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>ABV: {beer.abv}</p>
        <p>IBU: {beer.ibu}</p>
        <p>Description: {beer.description}</p>
        <p>First Brewed: {beer.first_brewed}</p>
        <p>Food Pairing:</p>
        <ul>
          {beer.food_pairing.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
