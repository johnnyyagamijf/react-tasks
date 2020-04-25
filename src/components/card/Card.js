import React, { Component } from 'react'

import './card.css';
export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <article>
          <strong>Teste</strong>
          <p>aqui vai ter a descrição dos dados</p>
          <a href="">Detalhes</a>
        </article>
      </div>
    )
  }
}
