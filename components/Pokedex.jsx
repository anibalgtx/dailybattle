import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { connectHits } from 'react-instantsearch-dom';

const Pokedex = (props) => {
  const { hits } = props;
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Pagination/> 
      </div>
      {
        <div className="pokedex-grid">
          {hits.length < 1 && 'Search for a valid Pokemon'}
          {hits.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name.english} />;
          })}
        </div>
      }
    </div>
  );
};

export default connectHits(Pokedex);
