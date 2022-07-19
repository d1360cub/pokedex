import React from 'react';
import { useSelector } from 'react-redux';
import './Details.css';

function Details() {
  const pokemon = useSelector((state) => state.pokemon);
  return (
    <>
      {!Object.entries(pokemon).length ? (
        <div className='text-center'>
          <strong>Select a Pokemon for more details...</strong>
        </div>
      ) : (
        <div className='pokemon__container align-center overflow-auto'>
          <div className='pokemon__name'>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
          <img
            width='350'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
          {pokemon.stats.map((item, index) => (
            <div key={index} className='text-center'>
              {item.stat.name}: {item.base_stat}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Details;
