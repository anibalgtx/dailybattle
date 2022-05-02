import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPokemons = async (limit = 80, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  const fetchPokemons = async () => {
    try {
      setLoading(true);

      const data = await getPokemons(20, 880);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setState(results);
      setLoading(false);
    } catch (err) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div className="container mx-auto ">
      <div className="flex justify-center items-center gap-2 flex-wrap h-screen">
        {loading
          ? "...loading"
          : state?.map((pokemon, index) => {
              return (
                <div className="flex flex-col gap-1" key={index}>
                  <span className="text-center">{pokemon?.name}</span>
                  <img src={pokemon.sprites.front_default} alt="" />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
