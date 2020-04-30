import React, {Component} from 'react';

import './styles.css';
import Checkbox from '../Checkbox';

class Card extends Component {
  render(){
    return(
    <div className="container">
      <article>
        <strong>{this.props.title}</strong>
        <p>{this.props.description}</p>
        <Checkbox />
          <a href="">Detalhes</a>
      </article>
    </div>
    );
  }
}

export default Card;