import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { Image } from './layout/Image';
import { ScrollToTopOnMount } from './layout/Scroll';


export class Portfolio extends Component {
	render() {
		return (
			<div className="wrap">

				<ScrollToTopOnMount/>

				<Menu />

				<div className="container">
								
					<Header />

					<div className="content">
						<h1>Portfolio</h1>

						<h2>Purrcipes</h2>

						<h3>
							<a href="https://github.com/ilanahnb/purrcipes" target="_blank">
								<img src="/icon-github.png" alt="GitHub icon" className="github-icon" />
								GitHub Repo 
							</a>
						</h3>

						<p><a href="http://www.purrcipes.com/" target="_blank">http://www.purrcipes.com/</a></p>

						<p>Responsive web app built with <mark>MeteorJS</mark> and integrated with <mark>MongoDB</mark> and Dropbox.</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, jQuery, Meteor, Node, MongoDB, Bootstrap, LESS, RESTful API.</small></p>

						<Image src="/screens-purrcipes.jpeg" alt="Purrcipes screens" class="screens" />


						<h2>My Portfolio</h2>

						<h3>
							<a href="https://github.com/ilanahnb/portfolio-react" target="_blank">
								<img src="/icon-github.png" alt="GitHub icon" className="github-icon" />
								GitHub Repo 
							</a>
						</h3>

						<p>Single page web app built with <mark>ReactJS</mark>.</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, React, SASS.</small></p>

						<Image src="/screens-portfolio.jpeg" alt="Portfolio screens" class="screens" />

					</div>
				</div>
			</div>
		); 
	}
}

