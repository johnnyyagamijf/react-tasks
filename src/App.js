import React, {Component} from 'react';


import Header from './components/Layout/Header';
import Card from './components/Layout/Card'
import Button from './components/Layout/Button';
import './app.css';
import Axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }
 async componentDidMount(){
   const response = await Axios.get('http://localhost:3333/tasks');
   console.log(response.data);
   this.setState({tasks: response.data});

   console.log(this.tasks);
  }
  render() {
    return(
      <div className="App">
        <Header />
        {
          this.state.tasks.map(task =>(
            <Card title={task.title} description={task.description}/>
          ))
        }  
        <div className="action">
          <Button title="Próxima"/>
          <Button title="Anterior"/>
        </div>
      </div>
    );
  }

}
