import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


// Import components
import Header from './components/Header';

import Home from './components/Home';
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Contact from "./components/Contact";



export default class App extends Component {

	render() {
		return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/two" component={Portfolio} />
            <Route exact path="/three" component={Blog} />
            <Route exact path="/four" component={Resume} />
            <Route exact path="/five" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
	}
}