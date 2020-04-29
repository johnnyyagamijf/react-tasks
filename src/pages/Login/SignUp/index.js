import React, { Component } from "react";

import { Alert } from "reactstrap";
import api from "../../../services/api";

import '../../Login/images/icons/favicon.ico';
import '../../Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../Login/css/util.css'
import '../../Login/css/main.css'
import "./styles.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    error: "",
    message: this.props.location.state ? this.props.location.state.message : "",
  };

  signUp = async e => {
    e.preventDefault();
    console.log(this.state);
    const { email, password, repeatPassword } = this.state;

    if (!email || !password || !repeatPassword) {
      this.setState({ message: "Preencha todos os dados para se cadastrar" });
    } else {
      if (repeatPassword !== password) {
        this.setState({ message: "Os campos de senha não são iguais" });
        return;
      }
      try {
        const result = await api.post("/users", { email, password });
        console.log('aqui está o resultado', result.status);
        if(result.status ===201){

        }
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              onSubmit={this.signUp}
              className="login100-form validate-form p-l-55 p-r-55 p-t-178"
            >
              {this.state.message !== "" ? (
                <Alert color="danger" className="text-center">
                  {this.state.message}
                </Alert>
              ) : (
                ""
              )}
              <span className="login100-form-title">
                Cadastro de novo usuário
              </span>
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

              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  className="input101"
                  type="password"
                  name="repeatPassword"
                  placeholder="Digite novamente a senha"
                  onChange={e =>
                    this.setState({ repeatPassword: e.target.value })}
                />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default SignUp;
