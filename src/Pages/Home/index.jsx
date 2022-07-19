import React from 'react';
import Grid from '../../Components/Grid';
import Details from '../../Components/Details';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

function Home() {
  return (
    <div>
      <h1 className='title'>POKEDEX</h1>
      <h2>First Generation</h2>
      <div className='container'>
        <Row>
          <Col>
            <Grid />
          </Col>
          <Col>
            <Details />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
