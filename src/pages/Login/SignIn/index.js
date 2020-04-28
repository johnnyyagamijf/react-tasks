import React, { Component } from "react";

import { Form, Label, Input, Alert } from "reactstrap";
import {Link} from 'react-router-dom';

import api from "../../../services/api";
import { login } from "../../../services/auth";
import './styles.css';

import '../../Login/images/icons/favicon.ico';
import '../../Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../Login/css/util.css'
import '../../Login/css/main.css'


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    message: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    console.log("aqui está o state", this.state);
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { email, password });
        console.log('a resposta é', response.data);
        login(response.data.token);
                this.props.history.push("/app");
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
     <form onSubmit={this.handleSignIn}>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
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
              </div>

              <div className="flex-col-c p-t-170 p-b-40">
                <Link to="/signup" className="txt3" type="submit">
                  Criar novo usuário
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div />
      </div>
      </form>
      /*{ // <div className="form-signin">
      //   <hr className="my-3" />
      //   {this.state.message !== "" ? ( */
      //     <Alert color="danger" className="text-center">
      //       {this.state.message}
      //     </Alert>
      //   ) : (
      //     ""
      //   )}
      //   <Form onSubmit={this.handleSignIn}>
      //     <section>
      //       <Label className="text-label" for="email">Email</Label>
      //       <Input
      //         type="text"
      //         id="email"
      //         onChange={e => this.setState({ email: e.target.value })}
      //         placeholder="Informe seu e-mail"
      //       />
      //     </section>
      //     <section>
      //       <Label className="text-label" for="password">Senha</Label>
      //       <Input
      //         type="password"
      //         id="password"
      //         onChange={e => this.setState({ password: e.target.value })}
      //         placeholder="Informe a senha"
      //       />
      //     </section>
      //     <button id="logar" className="btn btn-default btn-block" type="submit">
      //       {" "}
      //       Entrar{" "}
      //     </button>
      //     <Link  id="cadastrar" to="/signup" className="btn btn-default btn-block" type="submit">Cadastrar novo usuário</Link>
      //   </Form>
      // </div>
    );
  }
}

export default SignIn;
