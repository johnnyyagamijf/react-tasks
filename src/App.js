import React, {Component} from 'react';

import Header from './components/Layout/Header';
import './app.css';
import Routes  from './routes';
import "./styles/global";

export default  () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

