import logo from './logo.svg';
import './App.css';
import AppHw from './comps/appHw';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1 className='text-danger'>React</h1>
      <hr/>
      <AppHw/>
    </React.Fragment>
  );
}

export default App;
