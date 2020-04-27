import React, {Component} from 'react';

import Header from './components/Layout/Header';
import Main from './components/Layout/Main'
import './app.css';

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
