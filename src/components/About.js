import React, { Component } from 'react';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';
import { Link } from 'react-router-dom';
import { Image } from './layout/Image';
import { Carousel } from './layout/Carousel';
import { ScrollToTopOnMount } from './layout/Scroll';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DocumentMeta from 'react-document-meta';


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
				imagesrc: '/hobby-draw2.jpeg',
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
				imagesrc: '/hobby-familyfriends1.jpg',
				imagetext: 'My husband and I ♥'
			},
			{
				imagesrc: '/hobby-familyfriends4.jpg',
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
			carousel: '',
			readMore: 0
		};
	}

	readMoreClick() {
		let readMore = this.state.readMore;
		readMore ++;

		this.setState({
			readMore: readMore
		});
	}

	readLessClick() {
		let readMore = this.state.readMore;
		readMore --;
		
		this.setState({
			readMore: readMore
		});
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
		const meta = {
			title: 'About | Ilana Boeira | Front End Developer',
			description: 'About Ilana Boeira, including her history, work, skills and passions. Ilana Boeira is a front-end developer living in Sydney, Australia.'
		};

		let about, readMore;

		readMore = this.state.readMore;

		if(this.state.readMore === 2) {
			about = <div className="about-text" key={readMore}>
						<p>
							I’ve always been a creative person that likes mental challenges.
						</p>
						<p>
							I’m a Master of Science in Agricultural and Environmental Microbiology and was a biotechnology researcher in Brazil. But in 2014 something happened that changed my life completely and forever... I developed my first website and fell in love by front-end development!
						</p>
						<p>
							What can I say? Design and programming are so interesting and challenging. I got thrilled by all the possibilities! Since then I’m in constant improvement, always hungry for more. I’m a self-taught person and most of the things I’ve learned were by reading documentation, watching online videos, hacking and writting code. What fascinates me the most are responsive design and JavaScript programming.
						</p>

						<div className="indented-text">
							<p>
								In <b>2015</b> I started working at <a href="http://www.fareoffice.com/" title="Fareoffice website" rel="external" target="_blank">Fareoffice</a>, a Swedish tech company owned by Enterprise Holdings, the largest car rental company in the world as measured by revenue, fleet and employees. At Fareoffice we create car rental solutions for the Enterprise, National and Alamo brands. There I've been working for over 2 years as Project Manager and Web Content Manager. I grew quickly in the company and became a stakeholder for different products. This experience was very gratifying and I am grateful to have had the chance to work in this motivating company with great people.
							</p>
							<p>
								I enjoy studying and have great interest in learning new technologies. I spent several hours studying by myself to learn more about the amazing world of coding. In <b>2016</b> I learnt to program in JavaScript and created my first responsive web app <a href="http://www.purrcipes.com/" title="Purrcipes website" rel="external" target="_blank">www.purrcipes.com</a> using MeteorJS and MongoDB. This year I am working on my programming skills and my project is to master React.
							</p>

							<p>
								<b>My goal</b> is to become an inspiring developer! I aim to improve everyday.
							</p>
						</div>

						<p>
							I'm currently <em>available for work</em> and seeking an opportunity to work in a company where I can feel helpful, apply my creativity and learn from more experienced developers. If you are the one that can offer me this opportunity, please feel free to <Link to="/contact" title="Contact Ilana Boeira">contact me</Link>!
						</p>
						<p>
							I have a <em>permanent visa to work in Australia</em> and will move to <em>Sydney</em> in August.
						</p>

						<div className="button-centered">
							<button className="button-read button-read-less" onClick={() => { this.readLessClick() }}>
								Show less...
							</button>
						</div>
					</div>
		} else if(this.state.readMore === 1) {
			about = <div className="about-text" key={readMore}>
						<p>
							I’ve always been a creative person that likes mental challenges.
						</p>
						<p>
							I’m a Master of Science in Agricultural and Environmental Microbiology and was a biotechnology researcher in Brazil. But in 2014 something happened that changed my life completely and forever... I developed my first website and fell in love by front-end development!
						</p>
						<p>
							What can I say? Design and programming are so interesting and challenging. I got thrilled by all the possibilities! Since then I’m in constant improvement, always hungry for more. I’m a self-taught person and most of the things I’ve learned were by reading documentation, watching online videos, hacking and writting code. What fascinates me the most are responsive design and JavaScript programming.
						</p>
						<p>
							I'm currently <em>available for work</em> and seeking an opportunity to work in a company where I can feel helpful, apply my creativity and learn from more experienced developers. If you are the one that can offer me this opportunity, please feel free to <Link to="/contact" title="Contact Ilana Boeira">contact me</Link>!
						</p>
						<p>
							I have a <em>permanent visa to work in Australia</em> and will move to <em>Sydney</em> in August.
						</p>

						<div className="button-centered">
							<button className="button-read button-read-less" onClick={() => { this.readLessClick() }}>
								Hide...
							</button>

							<small> or </small>

							<button className="button-read" onClick={() => { this.readMoreClick() }}>
								Read even more!
							</button>
						</div>
					</div>
		} else {
			about = <div className="button-centered" key={readMore}>
						<button className="button-read" onClick={() => { this.readMoreClick() }}>
							Read more!
						</button>
					</div>;
		}

		const Button = ({icon, text, name, images}) => (
			<button className={this.state.activebutton === name ? 'hobby-item active' : 'hobby-item'}
					onClick={() => {
						this.setSrc(images[0].imagetext, images[0].imagesrc, name);
						this.handleCarousel(images);
					}}>
				<img src={icon} alt="Hobby" />
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

				<DocumentMeta {...meta} />

				<ScrollToTopOnMount/>

				<Menu />

				<div className="container">
				
					<Header />

					<Image src="/ilana-small.jpeg" alt="Ilana's avatar" class="my-picture-small" />

					<div className="content">

						<h1>About</h1>

						<strong>
							Hello! I'm Ilana, a front-end developer, Brazilian, former biotech researcher, nerd, climber and a cat person.
						</strong>

						<CSSTransitionGroup
							transitionName="read-more"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={500}>
							{about}
						</CSSTransitionGroup>


						<h2>My skills</h2>

						<div className="row">
							<div className="col-6">
								<h3>Professional</h3>

								<div className="skill-item">
									<span className="title">HTML5 & CSS3 </span>
									<progress value="4" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">JavaScript & jQuery </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">MeteorJS </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">ReactJS </span>
									<progress value="2" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Bootstrap </span>
									<progress value="4" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">LESS & SASS </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">UI/UX </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Responsive Design </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Git & GitHub </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">MongoDB </span>
									<progress value="2" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">MySQL </span>
									<progress value="2" max="5" className="display-none"></progress>
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
									<span className="title">Creative </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Dedication </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Determination </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Honesty </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
									</span>
								</div>

								<div className="skill-item">
									<span className="title">Passion </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="text">
										<a title="Animated gif on this page" onClick={() => this.openPopover()}>over 9.000</a>
									</span>
								</div>

								<Popover className="popover" isOpen={this.state.isPopoverOpen} onClose={() => this.closePopover()}>
									<span className="triangle">&#x25b2;</span>
									<Image src="/over-9000.gif" alt="Over 9000" />
								</Popover>

								<div className="skill-item">
									<span className="title">Proactive </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Problem Solving </span>
									<progress value="4" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Teamwork </span>
									<progress value="4" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Time Management </span>
									<progress value="5" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Verbal Communication </span>
									<progress value="3" max="5" className="display-none"></progress>
									<span className="circle">
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-full"></div>
										<div className="circle-empty"></div>
										<div className="circle-empty"></div>
									</span>
								</div>
								<div className="skill-item">
									<span className="title">Willingness to Help </span>
									<progress value="5" max="5" className="display-none"></progress>
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


						<h2>My passions</h2>

						<Buttons hobbies={hobbies} />

						{
							this.state.activebutton ? 
							<Carousel carousel={this.state.carousel} name={this.state.activebutton} />
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

