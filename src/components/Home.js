import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ScrollToTopOnMount } from './layout/Scroll';


export class Home extends Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}

	componentDidMount(prevProps) {
		window.scrollTo(0, 0)
		this.setState({ loading: false }); 
	}

	render() {
		const { loading } = this.state;

		if(loading) {
			return (
				<div className="loading-screen"></div>
			);
		}

		return (
			<div className="home">

				<ScrollToTopOnMount/>

				<div className="masthead">
					<h3 className="masthead-title">
						Front End Developer
					</h3>
				</div>

			    <div className="img-container">
			        <img src="./logo.png" alt="logo" />
			    </div>

				<nav className="footer-nav">
					<ul>
						<li><Link to="/about" className="footer-nav-item">About</Link></li>
						<li><Link to="/portfolio" className="footer-nav-item">Portfolio</Link></li>
						<li><Link to="/contact" className="footer-nav-item">Contact</Link></li>
					</ul>
				</nav>
			</div>
		); 
	}
}

