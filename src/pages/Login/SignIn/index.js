import React, { Component } from "react";

import { Alert } from "reactstrap";
import {Link} from 'react-router-dom';

import api from "../../../services/api";
import { login } from "../../../services/auth";
import './styles.css';
import '../../Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../Login/css/util.css'
import '../../Login/css/main.css'


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    message: "",
    usuario: ""
  };

  signIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ message: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { email, password });
        // armazena o token do usuário no localstorage
        login(response.data.token, email);
        this.setState({usuario: email});

        this.props.history.push("/tarefas");
      } catch (err) {
        this.setState({
          message:"Houve um problema com o login, verifique suas credenciais. T.T",
        })
        console.log(this.state.message);
      }
    }
  };

  render() {
    return (
      <>
          <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form onSubmit={this.signIn} 
            className="login100-form validate-form p-l-55 p-r-55 p-t-178">
              {this.state.message !== "" ? (
                <Alert color="danger" className="text-center">
                  {this.state.message}
                </Alert>
              ) : (
                ""
              )}
              <span className="login100-form-title">Logar</span>
              <div
                className="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Digite o email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <span className="focus-input100" />
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Digite a senha"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
                <Link to="/signup" className="txt3" type="submit">
                  Criar novo usuário
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div />
      </div>
       </>
    );
  }
}

export default SignIn;
