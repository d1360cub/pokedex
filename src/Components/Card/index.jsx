import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { render_pokemon } from '../../store/actions';
import './Card.css';

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
        <div className='card__container'>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
            alt={pokemonData.name}
            className='card__image'
          />
          <p>
            {pokemonData.id}. {pokemonData.name}
          </p>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <button onClick={details}>Detalles</button>
        </div>
      )}
    </>
  );
}

export default Card;
