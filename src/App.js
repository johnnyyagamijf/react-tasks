import React, {Component} from 'react';
import axios from 'axios';

import Header from './components/Layout/Header';
import Card from './components/Layout/Card'
import './app.css';
import api from '../src/services/api';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      docs: [],
      pages: 0,
      page: 1
    }
  }
 async componentDidMount(){
  this.getTasks();
  }

   getTasks = async () =>{
    const response = await api.get(`/tasks?page=${this.state.page}`);
    const {docs, pages} = response.data;
    this.setState({docs, pages});
  }

   nextPage = async() => {
    const nPage = this.state.page + 1;

    if (nPage > this.state.pages){
      return;
    }
    
    await this.setState({page: nPage});
    this.getTasks();
  }

  beforePage = async () => {
    const nPage = this.state.page - 1;

    if (nPage < 1){
      return;
    }

   await this.setState({page: nPage});
    this.getTasks();
  }
  render() {
    return(
      <div className="App">
        <Header />
        <div className="itens">
        {
          this.state.docs.map(task =>(
            <Card title={task.title} description={task.description}/>
          ))
        }  
        <div className="action">
          <button onClick={this.nextPage}>Próxima</button>
          <button onClick={this.beforePage}>Anterior</button>
        </div>
        </div>
      </div>
    );
  }
}
