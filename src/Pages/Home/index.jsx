import React from 'react';
import Grid from '../../Components/Grid';
import Details from '../../Components/Details';
import './Home.css';

function Home() {
  return (
    <div>
      <h1>POKEDEX</h1>
      <h2>First Generation</h2>
      <div className='container'>
        <div className='container__left'>
          <Grid />
        </div>
        <div className='container__right'>
          <Details />
        </div>
      </div>
    </div>
  );
}

export default Home;
