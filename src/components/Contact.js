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
			<div className="wrap">

				<DocumentMeta {...meta} />

				<ScrollToTopOnMount/>
            
				<Menu />
				
                <div className="container">

                    <Header />

                    <div className="content">
                        <h1>Contact</h1>

                        <p>
                            If you are interested in working with me to create awesome user interfaces or just knowing me better, then please get in touch!
                        </p>

                        <p>
                            <a href="mailto:ilana@ilanaboeira.com"
                               title="Send an email to Ilana Boeira">
                                ilana@ilanaboeira.com
                            </a>
                        </p>

                        <div className="social-nav">
                            <ul>
                                <li>
                                    <a href="mailto:ilana@ilanaboeira.com"
                                       title="Send an email to Ilana Boeira">
                                        <EmailIcon className="svg-icon" />
                                        <span className="display-none"> Send an email to Ilana Boeira</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ilanahnb?tab=repositories"
                                       title="GitHub repositories of Ilana Boeira"
                                       rel="external"
                                       target="_blank">
                                        <GithubIcon className="svg-icon" />
                                        <span className="display-none"> GitHub repositories of Ilana Boeira</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ilanaboeira/"
                                       title="LinkedIn account of Ilana Boeira"
                                       rel="external"
                                       target="_blank">
                                        <LinkedinIcon className="svg-icon" />
                                        <span className="display-none"> LinkedIn account of Ilana Boeira</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
			</div>
		); 
	}
}
