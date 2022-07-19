import React from 'react';
import { useSelector } from 'react-redux';
import './Details.css';

function Details() {
  const pokemon = useSelector((state) => state.pokemon);
  return (
    <>
      {!Object.entries(pokemon).length ? (
        <div className='loading__text'>
          <strong>Select a Pokemon for more details...</strong>
        </div>
      ) : (
        <div className='pokemon__container'>
          <div className='pokemon__name'>{pokemon.name}</div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
          {pokemon.stats.map((item, index) => (
            <div key={index}>
              {item.stat.name}: {item.base_stat}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Details;
