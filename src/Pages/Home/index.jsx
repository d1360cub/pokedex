import React from 'react';
import Grid from '../../Components/Grid';
import Details from '../../Components/Details';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div>
      <h1 className='title text-center'>POKEDEX</h1>
      <h2 className='text-center'>First Generation</h2>
      <Container fluid>
        <Row>
          <Col>
            <Grid />
          </Col>
          <Col>
            <Details />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
