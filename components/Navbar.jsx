import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div />
      <div>
        <img src='/pokemon.png' alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;