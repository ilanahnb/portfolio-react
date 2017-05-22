import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


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

		let menu;

		if(this.state.menuActive) {
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
			menu = "";
		}

		let active;
		
		if (this.state.menuActive) {
			active = "rotated-background active";
		} else {
			active = "rotated-background";
		}

	    return (
			<nav className="menu">

				<div className={active}></div>

				<button className="btn-menu" type="button" onClick={this.toggleMenu}>

					<div>
			        	<span className="lines"></span>
			        </div>

			    </button>

				<CSSTransitionGroup
					transitionName="menu"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={100}>
					{menu}
				</CSSTransitionGroup>
			</nav>
	    );
 	}
}

