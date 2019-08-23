import React, { Component } from 'react';
import './App.css';


// Import components
import Header from './components/Header';





export default class App extends Component {

	render() {
		return (
			<div className="App">

				<Header />

				<div className='page'>
					Edit <code>src/App.js</code> and save to reload.
				</div>
			</div>
		);
	}
}