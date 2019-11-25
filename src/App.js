import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


// Import components
import Header from './components/Header';

import Home from './components/Home';
import Artists from "./components/Artists";
import Date from "./components/Date";
import Location from "./components/Location";
import Contact from "./components/Contact";



export default class App extends Component {

	render() {
		return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/date" component={Date} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
	}
}