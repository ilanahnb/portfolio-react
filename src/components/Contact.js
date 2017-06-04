import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { ScrollToTopOnMount } from './layout/Scroll';
import DocumentMeta from 'react-document-meta';
import GithubIcon from 'react-icons/lib/fa/github-square';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';
import EmailIcon from 'react-icons/lib/fa/envelope-square';


export class Contact extends Component {
	render() {
		const meta = {
			title: 'Contact | Ilana Boeira | Front End Developer',
			description: 'Contact Ilana Boeira. Ilana Boeira is a Brazilian front-end developer living in Sydney, Australia.'
		};

		return (
			<div>

				<DocumentMeta {...meta} />

				<ScrollToTopOnMount/>
			
				<div className="wrap">
					<Menu />
				</div>

				<div className="full-height-div">

					<div className="container">

						<div className="white-box"></div>
									
						<Header />

						<div className="content">
							<h1>Contact</h1>

							<p>
								If you are interested in working with me to create awesome user interfaces or just knowing me better, then please get in touch!
							</p>

							<p>
								<a href="mailto:ilana@ilanaboeira.com" title="Send an email to Ilana Boeira">ilana@ilanaboeira.com</a>
							</p>

							<div className="social-nav">
								<ul>
									<li>
										<a href="mailto:ilana@ilanaboeira.com" title="Send an email to Ilana Boeira">
											<EmailIcon className="svg-icon" />
											<span className="hidden-text"> Send an email to Ilana Boeira</span>
										</a>
									</li>
									<li>
										<a target="_blank" title="GitHub repositories of Ilana Boeira" href="https://github.com/ilanahnb?tab=repositories" type="text/html">
											<GithubIcon className="svg-icon" />
											<span className="hidden-text"> GitHub repositories of Ilana Boeira</span>
										</a>
									</li>
									<li>
										<a target="_blank" title="LinkedIn account of Ilana Boeira" href="https://www.linkedin.com/in/ilanaboeira/" type="text/html">
											<LinkedinIcon className="svg-icon" />
											<span className="hidden-text"> LinkedIn account of Ilana Boeira</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		); 
	}
}
