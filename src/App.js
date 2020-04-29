import React, {Component} from 'react';

import './app.css';
import Routes  from './routes';
//import Header  from './components/Layout/Header';

export default  () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes />
    </div>
  );
}

