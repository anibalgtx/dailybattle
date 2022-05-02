import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Pokedex from "../components/Pokedex";
import { FavoriteProvider } from "../contexts/favoritesContext";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";

const { useState, useEffect } = React;

const localStorageKey = "favorite_pokemon";
const searchClient = algoliasearch(
  "HYIGK2AHIQ",
  "aada72e73daa6a332ea456cf66ee5b9b"
);

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  return (
    <InstantSearch searchClient={searchClient} indexName="dev_POKEDEX">
      <Configure hitsPerPage={24}/>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <div>
          <Navbar />
          <div className="App">
            <Searchbar />
            <Pokedex />
          </div>
        </div>
      </FavoriteProvider>
    </InstantSearch>
  );
};

export default Home;
