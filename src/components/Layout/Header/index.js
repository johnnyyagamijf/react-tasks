import React, {Component} from "react";

import { logout } from "../../../services/auth";
import "./styles.css";
class Header extends Component {
  constructor(props){
    super(props)
  }
  logouted = () =>{
    logout();
  }
render(){
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">
          Minhas tarefas
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                @{this.props.nome}
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-divider" />
                <a  href="/logout" class="dropdown-item">
                   Sair
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
}

export default Header;

