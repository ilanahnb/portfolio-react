import React, { Component } from 'react';
import { Image } from './layout/Image';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


export class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.carousel, 
			current: 0, 
			isNext: true,
			name: this.props.name
		};

		this.handlerPrev = this.handlerPrev.bind(this);
    	this.handlerNext = this.handlerNext.bind(this);
    	this.goToHistoryClick = this.goToHistoryClick.bind(this);
	}

	componentDidUpdate(nextProps) {
		// Load new data when the images property changes.
		if (this.props.carousel !== nextProps.carousel) {
			this.setState({
				items: this.props.carousel,
				current: 0,
				isNext: true,
				name: this.props.name
			});
		}
	}

	handlerPrev() {
		let index = this.state.current,
		    length = this.state.items.length;

		if( index < 1 ) {
		  index = length;
		}

		index --;

		this.setState({
		  current: index,
		  isNext: false
		});
	}

	handlerNext() {
		let index = this.state.current,
		    length = this.state.items.length - 1;

		if( index === length ) {
		  index = -1;
		}

		index ++;

		this.setState({
		  current: index,
		  isNext: true
		});
	}

	goToHistoryClick( curIndex, index ) {
		let next = (curIndex < index);

		this.setState({
		  current: index,
		  isNext: next
		});                 
	}

	render() {

		let index = this.state.current,
			name = this.state.name + index,
	        src = this.state.items[index].imagesrc,
	        text = this.state.items[index].imagetext;

		return (
			<div className="hobby-wrap">

				<div className="carousel">

						<div className="hobby-image">

							<CSSTransitionGroup
								transitionName="carousel-animation"
								transitionAppear={true}
			 					transitionAppearTimeout={500}
								transitionEnterTimeout={500}
			        			transitionLeaveTimeout={500}>

								<div className="carousel-slide" key={name}>
									<p>{text}</p>
									<Image src={src} alt="Hobby" class="hobby-img" />
								</div>

							</CSSTransitionGroup>

						</div>

					{this.state.items.length === 1 ? null :
						<div>
							<button className="carousel-control carousel-control-prev" onClick={this.handlerPrev}><span></span></button>
							<button className="carousel-control carousel-control-next" onClick={this.handlerNext}><span></span></button>

							<div className="carousel-history">
								<History 
									current={this.state.current} 
									items={this.state.items}
									changeSlide={this.goToHistoryClick}
								/>
							</div>
						</div>
					}
				</div>
			</div>
		);
	}
}


class History extends React.Component {
	render() {
		let current = this.props.current;

		let items = this.props.items.map( (el, index) => {

			let name = (index === current) ? 'active' : '';

			return (
				<li key={index}>
					<button className={name} 
						onClick={ () => this.props.changeSlide(current, index) }>
					</button>
				</li>
			)
		});

		return (
			<ul>
				{items}
			</ul>
		)
	}
}

