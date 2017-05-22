import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => (
	<div className="home">
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
)