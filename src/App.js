import React, { Component } from 'react';
import './App.scss';
import MapContainer  from './components/MapContainer';
import CurrentLocation from './components/CurrentLocation'
import { BrowserRouter as Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="App">
        <div className="welcome">welcome!</div>
        <div className="welcome--home">home</div>
        <MapContainer />

        {/* <Route path="/:MapContainer" component={ MapContainer } /> */}
        <CurrentLocation />
      </div>
        </header>
      </div>
    );
  }
}

export default App;
