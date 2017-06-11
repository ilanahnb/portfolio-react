import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Image } from './Image';


export class Menu extends Component {

	constructor(props){
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.state = {
		 	menuActive: false
		};
	}

	toggleMenu() {
		let menuState = !this.state.menuActive;
		this.setState({
			menuActive: menuState
		});
		return false;
	}

	render() {

		let menu, active, menuIsOpen, menuPlusPicture;

		if(this.state.menuActive) {
			active = "rotated-background active";
			menuIsOpen = "menu open";
			menu = <ul className="sidebar-nav">
				<li>
					<NavLink exact to="/"
							 title="Home page of Ilana Boeira"
							 className="sidebar-nav-item"
							 onClick={this.eventCloseSidebar}
							 activeClassName="active">
						<span></span> Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about"
							 title="About Ilana Boeira"
							 className="sidebar-nav-item"
							 onClick={this.eventCloseSidebar}
							 activeClassName="active">
						<span></span> About
					</NavLink>
				</li>
				<li>
					<NavLink to="/portfolio"
							 title="Portfolio of Ilana Boeira"
							 className="sidebar-nav-item"
							 onClick={this.eventCloseSidebar}
							 activeClassName="active">
						<span></span> Portfolio
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact"
							 title="Contact Ilana Boeira"
							 className="sidebar-nav-item"
							 onClick={this.eventCloseSidebar}
							 activeClassName="active">
						<span></span> Contact
					</NavLink>
				</li>
			</ul>
		} else {
			active = "rotated-background";
			menuIsOpen = "menu";
			menu = "";
		}

		if(location.pathname === "/about") {
			menuPlusPicture = " menu-plus-picture";
		} else {
			menuPlusPicture = "";
		}

		menuIsOpen += menuPlusPicture;

	    return (
				<nav className={menuIsOpen}>

					<h1 className="display-none">Main Menu</h1>

					<div className="menu-layer" onClick={this.toggleMenu}>
						<a href="#" className="hidden-interaction" onFocus={this.toggleMenu}></a>
						<div className={active}></div>
					    <span className="lines"></span>
					</div>

					<CSSTransitionGroup
						transitionName="menu"
						transitionEnterTimeout={300}
						transitionLeaveTimeout={100}>
						{menu}
					</CSSTransitionGroup>

					{
	                    !this.state.menuActive ? 
	                    <nav className="display-none">
							<ul>
								<li>
									<NavLink exact to="/" title="Home page of Ilana Boeira">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to="/about" title="About Ilana Boeira">
										About
									</NavLink>
								</li>
								<li>
									<NavLink to="/portfolio" title="Portfolio of Ilana Boeira">
										Portfolio
									</NavLink>
								</li>
								<li>
									<NavLink to="/contact" title="Contact Ilana Boeira">
										Contact
									</NavLink>
								</li>
							</ul>
						</nav>
	                    : null
	                }

					{
	                    (location.pathname === "/about") ? 
	                    <Image src="/ilana-big.jpeg" alt="Ilana's avatar" class="my-picture-big" />
	                    : null
	                }
				</nav>
	    );
 	}
}

