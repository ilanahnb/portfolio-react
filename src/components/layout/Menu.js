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
					<NavLink exact to="/" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">
						<span></span> Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">
						<span></span> About
					</NavLink>
				</li>
				<li>
					<NavLink to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">
						<span></span> Portfolio
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">
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
						<div className="menu-layer" onClick={this.toggleMenu}>
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
		                    (location.pathname === "/about") ? 
		                    <Image src="/ilana-big.jpeg" alt="Ilana's avatar" class="my-picture-big" />
		                    : null
		                }
				</nav>
	    );
 	}
}

