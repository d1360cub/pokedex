import React, { useState, useEffect } from 'react';
import { getAllPokemons } from '../../services';
import Card from '../Card';

function Grid() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemons = async () => {
    const { results } = await getAllPokemons();
    setAllPokemons(results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      {allPokemons && (
        <div>
          {allPokemons.map((element) => (
            <Card key={element.name} url={element.url} />
          ))}
        </div>
      )}
    </>
  );
}

export default Grid;
