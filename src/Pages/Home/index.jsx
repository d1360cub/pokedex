import React from 'react';
import Grid from '../../Components/Grid';
import Details from '../../Components/Details';
import './Home.css';

function Home() {
  return (
    <div className='container'>
      <div className='container__left'>
        <Grid />
      </div>
      <div className='container__right'>
        <Details />
      </div>
    </div>
  );
}

export default Home;
