import { Component } from 'react';

export default class Logout extends Component {

    componentWillMount() {
      console.log('entrou no deslogar');
        localStorage.removeItem("@airbnb-Token");
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}