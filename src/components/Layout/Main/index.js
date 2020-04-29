import React, {Component} from 'react';

import Card from '../Card'
import api from '../../../services/api';
import Header  from '../Header';         
export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      docs: [],
      pages: 0,
      page: 1,
      user: ""
    }
  }
 async componentDidMount(){
   const email = localStorage.getItem('user');
   this.setState({user: email.substring(0, email.indexOf("@"))});
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
      <>
      <Header nome={this.state.user}/>
          <div className="itens">
        {
          this.state.docs.map(task =>(
            <Card key={task._id} title={task.title} description={task.description}/>
          ))
        }  
        <div className="action">
        <button onClick={this.beforePage}>Anterior</button>
          <button onClick={this.nextPage}>Próxima</button>
        </div>
        </div>
      </>
    );
  }
}
