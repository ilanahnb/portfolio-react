import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ScrollToTopOnMount } from './layout/Scroll';
import DocumentMeta from 'react-document-meta';


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
		const meta = {
			title: 'Ilana Boeira | Front End Developer',
			description: 'Ilana Boeira is a Brazilian front-end developer living in Sydney, Australia.'
		};

		const { loading } = this.state;

		if(loading) {
			return (
				<div className="loading-screen"></div>
			);
		}

		return (
			<div className="home">

				<DocumentMeta {...meta} />

				<ScrollToTopOnMount/>

				<div className="masthead">
			    	<h1 className="hidden-heading">Ilana Boeira</h1>
					<h2 className="masthead-title">
						Front End Developer
					</h2>
				</div>

			    <div className="img-container">
			        <img src="./logo.png" alt="Ilana Boeira logo" />
			    </div>

				<nav className="footer-nav">
					<h1 className="hidden-heading">Main Menu</h1>
					<ul>
						<li><Link to="/about" title="About" className="footer-nav-item">About</Link></li>
						<li><Link to="/portfolio" title="Portfolio" className="footer-nav-item">Portfolio</Link></li>
						<li><Link to="/contact" title="Contact" className="footer-nav-item">Contact</Link></li>
					</ul>
				</nav>
			</div>
		); 
	}
}

