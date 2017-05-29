import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { Link } from 'react-router-dom';
import { Image } from './layout/Image';
import { Carousel } from './Carousel';
import { ScrollToTopOnMount } from './layout/Scroll';



const hobbies = [
	{
		icon: '/icon-climb.png',
		text: 'Rock Climbing',
		name: 'climb',
		images: [
			{
				imagesrc: '/hobby-climb1.jpg',
				imagetext: 'Climbing at Klättercentret Akalla, Stockholm.'
			},
			{
				imagesrc: '/hobby-climb2.jpg',
				imagetext: 'High five!'
			}
		]
	},
	{
		icon: '/icon-game.png',
		text: 'Videogames',
		name: 'game',
		images: [
			{
				imagesrc: '/hobby-video-game.jpg',
				imagetext: 'Playing Rocket League!'
			}
		]
	},
	{
		icon: '/icon-dice.png',
		text: 'Board games',
		name: 'boardgame',
		images: [
			{
				imagesrc: '/hobby-boardgame.jpg',
				imagetext: 'Oh no, a feral troll! (D&D - The Legend of Drizzt)'
			}
		]
	},
	{
		icon: '/icon-book.png',
		text: 'Read',
		name: 'read',
		images: [
			{
				imagesrc: '/hobby-read.jpg',
				imagetext: 'Reading Game of Thrones.'
			}
		]
	},
	{
		icon: '/icon-draw.png',
		text: 'Draw & Paint',
		name: 'draw',
		images: [
			{
				imagesrc: '/hobby-draw.jpg',
				imagetext: 'Drawing.'
			},
			{
				imagesrc: '/hobby-draw2.jpg',
				imagetext: 'Indoor climbing.'
			}
		]
	},
	{
		icon: '/icon-familyfriends.png',
		text: 'Family & Friends',
		name: 'familyfriends',
		images: [
			{
				imagesrc: '/hobby-familyfriends.jpg',
				imagetext: 'My husband and I ♥'
			},
			{
				imagesrc: '/hobby-familyfriends2.jpg',
				imagetext: 'Overkilled! At my sister\'s Halloween Party.'
			},
			{
				imagesrc: '/hobby-familyfriends3.jpg',
				imagetext: 'Adventures in Stockholm with Patricia and Kris!'
			}
		]
	},
	{
		icon: '/icon-cat.png',
		text: 'Cats',
		name: 'cats',
		images: [
			{
				imagesrc: '/hobby-cats1.jpg',
				imagetext: 'Panqueca & Jello.'
			},
			{
				imagesrc: '/hobby-cats6.jpg',
				imagetext: 'If I fit, I sit.'
			},
			{
				imagesrc: '/hobby-cats7.jpg',
				imagetext: 'Taking Panqueca for a walk.'
			},
			{
				imagesrc: '/hobby-cats5.jpg',
				imagetext: 'So tired!'
			}
		]
	},
	{
		icon: '/icon-fitness.png',
		text: 'Fitness',
		name: 'fitness',
		images: [
			{
				imagesrc: '/hobby-fitness.jpg',
				imagetext: 'Lifting some weight.'
			},
			{
				imagesrc: '/hobby-fitness2.jpg',
				imagetext: 'Run, Forrest, Run! (Mental Health Run, Stockholm)'
			}
		]
	},
	{
		icon: '/icon-beach.png',
		text: 'Travel',
		name: 'travel',
		images: [
			{
				imagesrc: '/hobby-travel1.jpg',
				imagetext: 'Madeira Island, Portugal.'
			},
			{
				imagesrc: '/hobby-travel2.jpg',
				imagetext: 'Anse Lazio beach in Praslin, Seychelles.'
			},
			{
				imagesrc: '/hobby-travel3.jpg',
				imagetext: 'Free hugs! Oslo, Norway.'
			}
		]
	},
	{
		icon: '/icon-code.png',
		text: 'Coding',
		name: 'code',
		images: [
			{
				imagesrc: '/hobby-coding.jpg',
				imagetext: 'Can\'t... stop... coding...'
			}
		]
	}
]


export class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isPopoverOpen: false,
			src: '',
			activebutton: false,
			imagesrc: '',
			imagetext: '',
			imageStatus: 'loading',
			carousel: ''
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

	setSrc(text, src, name) {
		this.setState({
			imagetext: text,
			imagesrc: src,
			activebutton: name
		});
	}

	handleCarousel(images) {
		this.setState({
			carousel: images
		});
	}

	render() {

		const Button = ({icon, text, name, images}) => (
			<button className={this.state.activebutton === name ? 'hobby-item active' : 'hobby-item'}
					onClick={() => {
						this.setSrc(images[0].imagetext, images[0].imagesrc, name);
						this.handleCarousel(images);
					}}>
				<img src={icon} alt="Hobby icon" />
				<div className="text"><small>{text}</small></div>
			</button>
		)

		const Buttons = ({hobbies}) => {
			return (
				<div className="hobby-wrap">
					{hobbies.map((hobby, i) =>
						<Button key={i} {...hobby} />
					)}
				</div>
			)
		}

		return (

			<div className="wrap">

				<ScrollToTopOnMount/>

				<div className="menu-plus-picture">
					<Menu />
					<Image src="/ilana-big.jpeg" alt="Ilana's avatar" class="my-picture-big" />
				</div>

				<div className="container">
				
					<Header />

					<Image src="/ilana-small.jpeg" alt="Ilana's avatar" class="my-picture-small" />

					<div className="content">

						<h1>About me</h1>

						<p>
							I am a Brazilian self-taught <mark>Front End Developer</mark> living in <mark>Sydney, Australia</mark>. Responsive web design and JavaScript programming are my passions.
						</p>
						<p>
							My first contact with HTML and CSS was in <b>2014</b>. Since then I fell in love with front-end development and got thrilled by all the possibilities and opportunities.
						</p>
						<p>
							In <b>2015</b> I started working at Fareoffice, a market leader in e-commerce solutions for the car rental industry. There I worked for over 2 years as Project Manager and Web Content Manager. I grew quickly in the company and became a stakeholder for different products. I was able to help to deliver the new websites within the deadlines, daily reporting to other stakeholders and ensuring quality.
						</p>
						<p>
							I spent several hours of my free time studying by myself to learn more about the amazing world of coding. In <b>2016</b> I learnt to program in JavaScript and created my first responsive web app <a href="http://www.purrcipes.com/" target="_blank">http://www.purrcipes.com/</a> using MeteorJS and MongoDB.
						</p>
						<p>
							<b>My goal</b> is to become an awesome and inspiring developer!
						</p>
						<p>
							I enjoy studying and have great interest in learning new technologies. I am currently <mark>available for work</mark> and seeking an opportunity to work in a company where I can feel helpful, apply my creativity and learn from more experienced developers.
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
									<Image src="/over-9000.gif" alt="Over 9000" />
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

						<Buttons hobbies={hobbies} />

						{
							this.state.activebutton ? 
							<Carousel carousel={this.state.carousel} />
							: null
						}

					</div>
				</div>
			</div>
		);
	}
}




class Popover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageStatus: 'loading'
		};
	}

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

