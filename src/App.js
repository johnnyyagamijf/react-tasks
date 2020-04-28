import React, {Component} from 'react';

import './app.css';
import Routes  from './routes';
import Header  from './components/Layout/Header';
import "./styles/global";

export default  () => {
  return (
    <div className="app">
      <Header />  
      <Routes />
    </div>
  );
}

