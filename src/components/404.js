import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';


export const Error404 = () =>  (
	<div>
	
		<div className="wrap">
			<Menu />
		</div>

		<div className="full-height-div">

			<div className="container">

				<div className="white-box"></div>
							
				<Header />

				<div className="content">
					<h1>404: page not found</h1>

					<p>We are sorry but the page you are looking for does not exist.</p>

					<p>
						<Link to="/">Head back home &rarr;</Link>
					</p>
				</div>
			</div>
		</div>
	</div>
)
