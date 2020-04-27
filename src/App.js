import React, {Component} from 'react';
import axios from 'axios';

import Header from './components/Layout/Header';
import Card from './components/Layout/Card'
import './app.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      docs: [],
      total: 0,
      page: 1
    }
    this.nextPage = this.nextPage.bind(this);
    this.beforePage = this.beforePage.bind(this);
  }
 async componentDidMount(){
  this.getTasks();
  }

  async getTasks(){
    const response = await axios.get(`http://localhost:3333/tasks?page=${this.state.page}`);
    const {docs, total} = response.data;
    this.setState({docs, total});
  }

  async nextPage(){
    const nPage = this.state.page + 1;

    if (nPage > this.state.total){
      return;
    }
    
    await this.setState({page: nPage});
    this.getTasks();
  }

  async beforePage(){
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
    );
  }
}
