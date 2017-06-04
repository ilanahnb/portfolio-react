import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => (
	<header className="masthead">

		<div className="opaque-background"></div>

		<h3 className="masthead-title">
			<Link to="/" title="Home page of Ilana Boeira">Ilana Boeira</Link> &middot; 
			Front End Developer
		</h3>

	</header>
)
