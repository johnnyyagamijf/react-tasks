import React, { Component } from "react";

import "./styles.css";
import api from "../../../services/api";
class Task extends Component {
  state = {
    title: "",
    description: "",
    error: "",
    message: this.props.location.state ? this.props.location.state.message : "",
  };
  addTask = async e =>{
    e.preventDefault();
    const { title, description } = this.state;
    if (!title || !description) {
      this.setState({ message: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/tasks", { title, description });
        this.props.history.push("/tarefas");
      } catch (err) {
        this.setState({
          message:"Houve um problema com o login, verifique suas credenciais. T.T",
        })
        console.log(this.state.message);
      }
    }
  }
 
  render() {
    return (
     <div className="data-task">
       <form onSubmit={this.addTask}>
         <section>
           <label htmlFor="">Titulo</label>
           <input type="text" 
           className="form-control" 
           placeholder="Digite o titulo"
           name="titulo"
           onChange={e => this.setState({title: e.target.value})}/>
         </section>
         <hr/>
         <section>
           <label htmlFor="">Descrição</label>
           <textarea 
           class="form-control rounded-0" 
           id="exampleFormControlTextarea1"
           name="descricao" 
           rows="10"
           onChange={e => this.setState({description: e.target.value})}></textarea>
         </section>
         <hr/>
         <button type="submit" className="btn btn-outline-primary btn-block">Cadastrar</button>
       </form>
     </div>     
    );
  }
}

export default Task;
