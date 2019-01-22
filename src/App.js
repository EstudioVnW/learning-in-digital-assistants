import React, { Component } from 'react';
import logo from './assets/bart.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="chatBox">
      <img src={logo} className="logo" alt="logo" />
        <div>
          <div className="chatBoxAssist">
            <p>Resposta: </p>
          </div>
          <div className="chatBoxUser">
            <input placeholder="Digite sua duvida..."></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
