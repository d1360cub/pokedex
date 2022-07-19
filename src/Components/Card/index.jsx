import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { render_pokemon } from '../../store/actions';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function PokemonCard({ url }) {
  const [pokemonData, setPokemonData] = useState({});
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
      {pokemonData.name && (
        <Card
          className='my-3 p-3 rounded text-center shadow p-1 mb-3 bg-white rounded'
          style={{ width: '11rem' }}
          bg={`${pokemonData.types[0].type.name}`}
        >
          <Card.Img
            style={{ width: '8rem' }}
            variant='top'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
            alt={pokemonData.name}
          />
          <Card.Body
            className={`${pokemonData.types[0].type.name} rounded text-white`}
          >
            <Card.Title as='div'>
              <strong>
                #{pokemonData.id} {pokemonData.name}
              </strong>
            </Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>Height: {pokemonData.height}</ListGroup.Item>
            <ListGroup.Item>Weight: {pokemonData.weight}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant='outline-success' onClick={details}>
              Details
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default PokemonCard;
