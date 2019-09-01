import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import Testando from './Teste';

import Navbar from './ui/NavBar';
import Home from './container/Home';
import Carousel from './ui/Carousel'

class App extends Component {
  render() {
    const logo = 'ReactJS - Testando'
    return (
      <div className="container-fluid">
        <Navbar logo={logo}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
