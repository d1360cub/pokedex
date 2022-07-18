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
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>{pokemonData.name}</p>
          <button>Detalles</button>
        </div>
      )}
    </>
  );
}

export default Card;
