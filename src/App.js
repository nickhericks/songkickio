import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


// Import components
import Header from './components/Header';

import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';



export default class App extends Component {

	render() {
		return (
      <BrowserRouter>
        <div className="App">
          <Header />

					<Switch>
						<Route exact path='/' component={One} />
						<Route exact path='/two' component={Two} />
						<Route exact path='/three' component={Three} />
						<Route exact path='/four' component={Four} />
						<Route exact path='/five' component={Five} />
					</Switch>

        </div>
      </BrowserRouter>
    );
	}
}