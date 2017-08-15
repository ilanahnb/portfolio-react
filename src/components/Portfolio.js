import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { Image } from './layout/Image';
import { ScrollToTopOnMount } from './layout/Scroll';
import GithubIcon from 'react-icons/lib/fa/github-square';
import ExternalLink from 'react-icons/lib/fa/external-link-square';
import DocumentMeta from 'react-document-meta';


export class Portfolio extends Component {
	render() {
        const meta = {
            title: 'Portfolio | Ilana Boeira | Front End Developer',
            description: 'Latest websites Ilana have built with links to her GitHub repositories and websites. Ilana Boeira is a front-end developer living in Newcastle, Australia.'
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
                        

						<h2>Fareoffice Website</h2>

						<p>I've built the first version of the new website for Fareoffice, a Swedish tech company that creates solutions for Enterprise, the largest car rental company in the world. I built the website with <em>Webpack</em> and <em>Sass</em>. It will go live soon.</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, Webpack, Sass.</small></p>

						<Image  src="/screens-fareoffice-medium.jpeg"
                                srcSet="/screens-fareoffice-small.jpeg 400w, /screens-fareoffice-medium.jpeg 724w"
                                alt="Fareoffice website on different screen sizes"
                                class="screens"
                                sizes="(max-width: 766px) 100vw, 724px" />
                        

						<h2>My Personal Website</h2>

						<p className="portfolio-links">
							<a href="https://github.com/ilanahnb/portfolio-react"
							   title="GitHub Repository of Ilana's Portfolio"
							   rel="external"
							   target="_blank">
            
								<GithubIcon className="svg-icon" />
                                <span>GitHub Repository</span>
								
							</a>
						</p>

						<p>My personal portfolio website built with <em>ReactJS</em> and <em>Sass</em>.</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, React, Sass.</small></p>

						<Image  src="/screens-portfolio-medium.jpeg"
                                srcSet="/screens-portfolio-small.jpeg 400w, /screens-portfolio-medium.jpeg 724w"
                                alt="Portfolio on different screen sizes"
                                class="screens" />


						<h2>Purrcipes — Recipe Web App</h2>

						<p className="portfolio-links">
							<a href="https://github.com/ilanahnb/purrcipes"
							   title="GitHub repository of Purrcipes"
							   rel="external"
							   target="_blank">
            
								<GithubIcon className="svg-icon" />
                                <span>GitHub Repository</span>

                            </a>
						</p>

						<p className="portfolio-links">
							<a href="http://www.purrcipes.com/"
							   title="Purrcipes website"
							   rel="external"
							   target="_blank">
            
								<ExternalLink className="svg-icon" />
                                <span>www.purrcipes.com</span>
								
							</a>
						</p>

						<p>Purrcipes is a responsive web app built with <em>MeteorJS</em> (full-stack JavaScript platform written using Node.js) and integrated with <em>MongoDB</em> and Dropbox. On Purrcipes you can login, add your own recipes, save recipes from other users as your favourites, comment and vote. And all this with a cat theme!</p>

						<p><small><b>Keywords:</b> HTML5, CSS3, JavaScript, jQuery, Meteor, Node, MongoDB, Bootstrap, Less, RESTful API.</small></p>

						<Image  src="/screens-purrcipes-medium.jpeg"
                                srcSet="/screens-purrcipes-small.jpeg 400w, /screens-purrcipes-medium.jpeg 724w"
                                alt="Purrcipes on different screen sizes"
                                class="screens" />
						

					</div>
				</div>
			</div>
		); 
	}
}

