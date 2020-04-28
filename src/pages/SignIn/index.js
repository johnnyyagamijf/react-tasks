import React, { Component } from "react";

import { Form, Label, Input, Alert } from "reactstrap";
import {Link} from 'react-router-dom';

import api from "../../services/api";
import { login } from "../../services/auth";
import './styles.css';

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
      <div className="form-signin">
        <hr className="my-3" />
        {this.state.message !== "" ? (
          <Alert color="danger" className="text-center">
            {this.state.message}
          </Alert>
        ) : (
          ""
        )}
        <Form onSubmit={this.handleSignIn}>
          <section>
            <Label className="text-label" for="email">Email</Label>
            <Input
              type="text"
              id="email"
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Informe seu e-mail"
            />
          </section>
          <section>
            <Label className="text-label" for="password">Senha</Label>
            <Input
              type="password"
              id="password"
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Informe a senha"
            />
          </section>
          <button id="logar" className="btn btn-default btn-block" type="submit">
            {" "}
            Entrar{" "}
          </button>
          <Link  id="cadastrar" to="/signup" className="btn btn-default btn-block" type="submit">Cadastrar novo usuário</Link>
        </Form>
      </div>
    );
  }
}

export default SignIn;
