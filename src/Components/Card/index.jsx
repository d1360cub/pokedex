import React, { useState, useEffect } from 'react';

function Card({ url }) {
  const [pokemonData, setPokemonData] = useState([]);

  const data = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setPokemonData(response));
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {pokemonData && (
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
            alt=''
          />
          <p>{pokemonData.name}</p>
          <p>{pokemonData.id}</p>
          <button>Detalles</button>
        </div>
      )}
    </>
  );
}

export default Card;
