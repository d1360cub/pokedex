import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getAllPokemons } from '../../services';
import Card from '../Card';

function Grid() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    const { results } = await getAllPokemons();
    setAllPokemons(results);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      {loading ? (
        <div className='loading__text'>
          <strong>I will be with you in a few seconds...</strong>
        </div>
      ) : (
        <Row>
          {allPokemons.map((element) => (
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card key={element.name} url={element.url} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Grid;
