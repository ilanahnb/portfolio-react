import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { Link } from 'react-router-dom';


const buttons = [
	{
		icon: '/icon-climb.png',
		text: 'Rock Climbing',
		imagesrc: '/hobby-climb2.png',
		imagetext: 'Climbing at Klättercentret Akalla, Stockholm.',
		name: 'climb'
	},
	{
		icon: '/icon-game.png',
		text: 'Videogames',
		imagesrc: '/hobby-video-game.jpg',
		imagetext: 'Playing Rocket League!',
		name: 'game'
	},
	{
		icon: '/icon-dice.png',
		text: 'Board games',
		imagesrc: '/hobby-boardgame.jpg',
		imagetext: 'Oh no! A feral troll!',
		name: 'boardgame'
	},
	{
		icon: '/icon-book.png',
		text: 'Read',
		imagesrc: '/hobby-read.jpg',
		imagetext: 'Reading Game of Thrones.',
		name: 'read'
	},
	{
		icon: '/icon-draw.png',
		text: 'Draw & Paint',
		imagesrc: '/hobby-draw.jpg',
		imagetext: 'Drawing.',
		name: 'draw'
	},
	{
		icon: '/icon-familyfriends.png',
		text: 'Family & Friends',
		imagesrc: '/hobby-familyfriends.jpg',
		imagetext: 'Me and my husband ♥',
		name: 'familyfriends'
	},
	{
		icon: '/icon-cat.png',
		text: 'Cats',
		imagesrc: '/hobby-cat2.jpg',
		imagetext: 'Panqueca & Jello.',
		name: 'cat'
	},
	{
		icon: '/icon-fitness.png',
		text: 'Fitness',
		imagesrc: '/hobby-fitness.jpg',
		imagetext: 'Lifting some weight.',
		name: 'fitness'
	},
	{
		icon: '/icon-beach.png',
		text: 'Beach',
		imagesrc: '/hobby-beach.jpg',
		imagetext: 'Anse Lazio beach in Praslin, Seychelles.',
		name: 'beach'
	},
	{
		icon: '/icon-code.png',
		text: 'Coding',
		imagesrc: '/hobby-coding.jpg',
		imagetext: 'Can\'t... stop... coding...',
		name: 'code'
	}
]


export class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isPopoverOpen: false,
			src: '',
			hobbysrc: '/hobby-climb2.png',
			hobbytext: 'Climbing at Klättercentret Akalla, Stockholm.',
			activebutton: ''
		};
	}

	openPopover() {
		this.setState({
			isPopoverOpen: true,
			src: '/over-9000.gif'
		});
	}

	closePopover() {
		this.setState({
			isPopoverOpen: false,
			src: ''
		});
	}

	setSrc(src, text, name) {
		this.setState({
			hobbysrc: src,
			hobbytext: text,
			activebutton: name
		});
	}

	render() {

		const Button = ({icon, text, imagesrc, imagetext, name}) => (
			<button className={this.state.activebutton === name ? 'hobby-item active' : 'hobby-item'}
					onClick={() => this.setSrc(imagesrc, imagetext, name)}>
				<img src={icon} alt="Hobby icon" />
				<div className="text"><small>{text}</small></div>
			</button>
		)

		const Buttons = ({buttons}) => {
			return (
				<div>
					{buttons.map((button, i) =>
						<Button key={i} {...button} />
					)}
				</div>
			)
		}

		return (
			<div className="container">

				<div className="menu-plus-picture">
					<Menu />
					<img src="/ilana-big.jpg" className="my-picture-big" alt="Ilana's avatar" />
				</div>
					
				<div className="white-box"></div>
			
				<Header />

				<img src="/ilana-small.jpeg" className="my-picture-small" alt="Ilana's avatar" />

				<div className="content">

					<h1>About me</h1>

					<p>
						I am a Brazilian <mark>Front End Developer</mark> living in <mark>Sydney, Australia</mark>.
					</p>
					<p>
						<b>2015 &middot; </b>My first contact with HTML and CSS was late 2015. Since then I fell in love with front-end development and got thrilled by all the possibilities and opportunities.
					</p>
					<p>
						<b>2016 &middot; </b>I spent several hours of my free time studying by myself to learn more about the amazing world of coding. During this time I learnt to program in JavaScript and created my first responsive web app <a href="http://www.purrcipes.com/" target="_blank">http://www.purrcipes.com/</a> using MeteorJS and MongoDB.
					</p>
					<p>
						I enjoy studying and have great interest in learning new technologies. I’m currently <mark>available for work</mark>. I am in the beginning of my career as a developer and seeking for an opportunity to work in a company where I can feel helpful, apply my creativity and learn from more experienced developers.
					</p>
					<p>
						If you are the one that can offer me this opportunity, please feel free to <Link to="/contact">contact me</Link>!
					</p>


					<h2>Skills</h2>

					<div className="row">
						<div className="col-6">
							<h3>Professional</h3>

							<div className="skill-item">
								<span className="title">HTML5 & CSS3</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">JavaScript & jQuery</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">LESS & SASS</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">MeteorJS</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">ReactJS</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Bootstrap</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">UI/UX</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Responsive Design</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Git & GitHub</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">MongoDB</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">MySQL</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
						</div>

						<div className="col-6">
							<h3>Personal</h3>

							<div className="skill-item">
								<span className="title">Creative</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Dedication</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Determination</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Honesty</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>

							<div className="skill-item">
								<span className="title">Passion</span>
								<span className="text">
									<a onClick={() => this.openPopover()}>over 9.000</a>
								</span>
							</div>
							<Popover className="popover" isOpen={this.state.isPopoverOpen} onClose={() => this.closePopover()}>
								<span className="triangle">&#x25b2;</span>
								<div className="popover-content">
									<img src={this.state.src} alt="Over 9000" />
								</div>
							</Popover>

							<div className="skill-item">
								<span className="title">Proactive</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Problem Solving</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Teamwork</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Time Management</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Verbal Communication</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-empty"></div>
									<div className="circle-empty"></div>
								</span>
							</div>
							<div className="skill-item">
								<span className="title">Willingness to Help</span>
								<span className="circle">
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
									<div className="circle-full"></div>
								</span>
							</div>
						</div>
					</div>


					<h2>Passions & Hobbies</h2>

					<Buttons buttons={buttons} />

					<div className="hobby-image">
						<p>{this.state.hobbytext}</p>
						<img src={this.state.hobbysrc} alt="Hobby" />
					</div>
					
				</div>
			</div>
		);
	}
}


class Popover extends Component {
    render() {
		if (this.props.isOpen === false)
			return null

		let backdropStyle = {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: '0px',
			left: '0px',
		}

		return (
			<div className={this.props.containerClassName}>
				<div className={this.props.className}>
					{this.props.children}
				</div>
				{
					!this.props.noBackdrop && <div className={this.props.backdropClassName}
					style={backdropStyle}
					onClick={e => this.close(e)}/>
				}
			</div>
		)
	}

	close(e) {
		e.preventDefault()

		if (this.props.onClose) {
			this.props.onClose()
		}
	}
}

