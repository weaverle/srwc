import React, { Component } from 'react';
import './App.scss';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header bg-accent1">
          Southwest Region Woman's Club
          <Button outline size="lg" color="primary">Woo!</Button>
        </header>
      </div>
    );
  }
}

export default App;
