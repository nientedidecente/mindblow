import React, { Component } from 'react';
import './App.css';
import {generator} from "./libs";

class App extends Component {
  state = {
      card: generator.generate()
  };

  generate = () => this.setState({card: generator.generate()});

  render() {
    const {card} = this.state;
    return (
      <div className="App" style={{backgroundColor: card.backgroundColor}} onClick={this.generate}>
        <h1 style={{color:card.textColor}}>{card.text}</h1>
      </div>
    );
  }
}

export default App;
