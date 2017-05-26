import React, { Component } from 'react';


export class Image extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageStatus: 'loading'
		};
	}

	handleImageLoaded() {
		this.setState({
			imageStatus: 'loaded'
		});
	}

	handleImageErrored() {
		this.setState({
			imageStatus: 'failed to load'
		});
	}

	componentDidUpdate(nextProps) {
		// Load new data when the src property changes.
		if (this.props.src !== nextProps.src) {
			this.setState({
				imageStatus: 'loading',
				imagesrc: this.props.src
			});
		}
	}

	render() {
		return (
			<div className={this.props.class}>
				{
					this.state.imageStatus === 'loading' ? 
					<div className="loading-box"></div> : null
				}
			    <img className={this.state.imageStatus === 'loading' ? 'img-loading' : 'img-loaded'}
					src={this.props.src} alt={this.props.alt}
					onLoad={this.handleImageLoaded.bind(this)}
					onError={this.handleImageErrored.bind(this)}
			    />
			</div>
		);
	}
}

