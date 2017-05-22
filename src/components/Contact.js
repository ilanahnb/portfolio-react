import React from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';


export const Contact = () =>  (
	<div className="container">

		<Menu />

		<div className="white-box"></div>
					
		<Header />

		<div className="content">
			<h1>Contact</h1>

			<p>
				If you are interested in working with me to create awesome user interfaces or just knowing me better, then please get in touch!
			</p>

			<p>
				<a href="mailto:ilana@ilanaboeira.com">ilana@ilanaboeira.com</a>
			</p>

			<div className="social-nav">
				<ul>
					<li>
						<a target="_blank" href="https://github.com/ilanahnb?tab=repositories" type="text/html">
							<img src="/icon-github.png" alt="GitHub icon" />
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/ilanaboeira/" type="text/html">
							<img src="/icon-linkedin.png" alt="LinkedIn icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
)
