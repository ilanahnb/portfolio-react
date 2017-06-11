import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { Image } from './layout/Image';
import { ScrollToTopOnMount } from './layout/Scroll';
import DocumentMeta from 'react-document-meta';
import GithubIcon from 'react-icons/lib/fa/github-square';
import ExternalLink from 'react-icons/lib/fa/external-link-square';


export class Portfolio extends Component {
	render() {
		const meta = {
			title: 'Portfolio | Ilana Boeira | Front End Developer',
			description: 'Latest websites Ilana have built with links to her GitHub repositories and websites. Ilana Boeira is a front-end developer living in Sydney, Australia.'
		};

		return (
			<div className="wrap">

				<DocumentMeta {...meta} />

				<ScrollToTopOnMount/>

				<Menu />

				<div className="container">
								
					<Header />

					<div className="content">
						<h1>Portfolio</h1>

						<strong>
							The latest websites I've built.
						</strong>


						<h2>Purrcipes</h2>

						<p className="portfolio-links">
							<a href="https://github.com/ilanahnb/purrcipes"
							   title="GitHub repository of Purrcipes"
							   rel="external"
							   target="_blank">
								<GithubIcon className="svg-icon" />
								GitHub Repository
							</a>
						</p>

						<p className="portfolio-links">
							<a href="http://www.purrcipes.com/"
							   title="Purrcipes website"
							   rel="external"
							   target="_blank">
								<ExternalLink className="svg-icon" />
								www.purrcipes.com
							</a>
						</p>

						<p>Purrcipes is a responsive web app built with <em>MeteorJS</em> and integrated with <em>MongoDB</em> and Dropbox. On Purrcipes you can login, add your own recipes, save recipes from other users as your favourites, comment and vote. And all this with a cat theme!</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, jQuery, Meteor, Node, MongoDB, Bootstrap, LESS, RESTful API.</small></p>

						<Image src="/screens-purrcipes.jpeg" alt="Purrcipes on different screen sizes" class="screens" />
						

						<h2>My Portfolio</h2>

						<p className="portfolio-links">
							<a href="https://github.com/ilanahnb/portfolio-react"
							   title="GitHub Repository of Ilana's Portfolio"
							   rel="external"
							   target="_blank">
								<GithubIcon className="svg-icon" />
								GitHub Repository 
							</a>
						</p>

						<p>Single page website built with <em>ReactJS</em>.</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, React, SASS.</small></p>

						<Image src="/screens-portfolio.jpeg" alt="Portfolio on different screen sizes" class="screens" />

					</div>
				</div>
			</div>
		); 
	}
}

