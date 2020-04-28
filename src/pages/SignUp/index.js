import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import './styles.css';
import { Form, Label, Input, Alert } from "reactstrap";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    error: "",
    message : this.props.location.state?this.props.location.state.message: '',
  };

  handleSignUp = async e => {
    e.preventDefault();
    console.log(this.state)
    const { email, password, repeatPassword } = this.state;

    if (!email || !password || !repeatPassword) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      if (repeatPassword !== password) {
        this.setState({ message: "Os campos de senha não são iguais" });
        return;
      }
      try {
       const result = await api.post("/users", {email, password });
       console.log(result);
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="form-signup">
        <hr className="my-3" />
        {this.state.message !== "" ? (
          <Alert color="danger" className="text-center">
            {this.state.message}
          </Alert>
        ) : (
          ""
        )}
        <Form onSubmit={this.handleSignUp}>
          <section>
            <Label for="email">Email</Label>
            <Input
              type="text"
              id="email"
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Informe seu e-mail"
            />
          </section>
          <section>
            <Label for="password">Senha</Label>
            <Input
              type="password"
              id="password"
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Informe a senha"
            />
          </section>
          <section>
            <Label for="password">Confirme o password</Label>
            <Input
              type="password"
              id="password"
              onChange={e => this.setState({ repeatPassword: e.target.value })}
              placeholder="Repita o password"
            />
          </section>
          <section>
          <button className="btn btn-primary btn-block" type="submit">Entrar</button>
          </section>
          </Form>
      </div>
    );
  }
}

export default SignUp;