import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { render_pokemon } from '../../store/actions';

function Card({ url }) {
  const [pokemonData, setPokemonData] = useState([]);
  const dispatch = useDispatch();

  const data = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setPokemonData(response));
  };

  useEffect(() => {
    data();
  }, []);

  const details = () => {
    dispatch(render_pokemon(pokemonData));
  };

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
          <button onClick={details}>Detalles</button>
        </div>
      )}
    </>
  );
}

export default Card;
