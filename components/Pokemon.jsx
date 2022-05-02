import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon?.name?.english) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon?.name?.english);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon?.sprite}
          alt={pokemon?.name.english}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon?.name?.english}</h3>
          <div>#{pokemon?.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon?.type?.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
