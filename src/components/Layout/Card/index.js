import React, {Component} from 'react';

import './styles.css';

class Card extends Component {
  render(){
    return(
    <div className="container">
      <article>
        <strong>{this.props.title}</strong>
        <p>{this.props.description}</p>
        {/* <input type="checkbox" name="Opção 01" id="Opção 01" value="01" /><label for="Opção 01"> Opção 01</label> */}
          <a href="">Detalhes</a>
      </article>
    </div>
    );
  }
}

export default Card;