import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


render(
	<Router>
			<div className="wrap">
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>,
    document.getElementById('root')
)
