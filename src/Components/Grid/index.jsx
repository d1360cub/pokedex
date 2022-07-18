import React, { useState, useEffect } from 'react';
import { getAllPokemons } from '../../services';

function Grid() {
  const [allPokemons, setAllPokemons] = useState({});
  console.log(
    '🚀 ~ file: index.jsx ~ line 6 ~ Grid ~ allPokemons',
    allPokemons
  );

  const getPokemons = async () => {
    const data = await getAllPokemons();
    setAllPokemons(data);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return <div>Grid</div>;
}

export default Grid;
