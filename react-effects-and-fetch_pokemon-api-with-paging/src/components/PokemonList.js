import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  //const [prevUrl, setPrevUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          ` https://pokeapi.co/api/v2/pokemon?offset=${currentPage}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 20);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 20);
  };
  return (
    <main>
      {currentPage > 0 && (
        <button type="button" onClick={prevPage}>
          Previous Page
        </button>
      )}
      <button type="button" onClick={nextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
