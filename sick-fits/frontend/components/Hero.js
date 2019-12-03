import React, { Component } from 'react';
import styled from 'styled-components';
import remSize from '../lib/remSize';

import Slider from "react-slick";

const StyledHero = styled.div`
	min-height: 680px;
	background-image: url('/static/images/pattern.png');
	background-size: cover;
	background-position: center;
	background-color: ${props => props.theme.secondary};
	display: flex;
	justify-content: center;
	align-items: center;

	> div {
		width: 70%;
		margin: 0 auto;
	}
`;

const StyledShoe = styled.div`
	background: ${props => props.theme.white};
	border-radius: 20px;
	box-shadow: ${props => props.theme.bsDefault};
	max-width: 370px;
	overflow: hidden;
	margin: 0 auto;

	.img {
		height: 180px;

		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}
	.content {
		padding: 20px 30px 0;
		color: ${props => props.theme.dark};
		margin-bottom: ${() => remSize(10)};
		h2 {
			font-weight: 700;
			margin-bottom: ${() => remSize(8)};
			font-size: ${() => remSize(16)};
		}

		p {
			font-size: ${() => remSize(14)};
			line-height: ${() => remSize(19)};
			margin-bottom: 0;
		}
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 30px;
	}

	.button {
		background: none;
		border: 0;
		padding: 0;
		cursor: pointer;
		&, &:focus {
			outline: none;
		}
	}

	.price,
	.button {
		font-size: ${() => remSize(14)};
		font-weight: 400;
	}
`





export class HeroShoes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			window: {
				width: 0,
				height: 0
			}
		}

	}
	
	render() {

		const SlideSettings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			centerPadding: this.state.window.width < 1540 ? '0px' : '120px',
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500
		};

		return (
			<Slider {...SlideSettings}>
				<StyledShoe>
					<div className="img">
						<img src="/static/images/shoe-01.png" />
					</div>
					<div className="content">
						<h2>Sapato Nike Black 2020</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum vel augue feugiat maximus. Donec varius pharetra nisi, nec venenatis dui blandit nec.</p>
					</div>
					<div className="footer">
						<span className="price">R$273,99</span>
						<button className="button">Add to cart</button>
					</div>
				</StyledShoe>
				<StyledShoe>
					<div className="img">
						<img src="/static/images/shoe-02.png" />
					</div>
					<div className="content">
						<h2>Sapato Nike Black 2020</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum vel augue feugiat maximus. Donec varius pharetra nisi, nec venenatis dui blandit nec.</p>
					</div>
					<div className="footer">
						<span className="price">R$273,99</span>
						<button className="button">Add to cart</button>
					</div>
				</StyledShoe>
				<StyledShoe>
					<div className="img">
						<img src="/static/images/shoe-03.png" />
					</div>
					<div className="content">
						<h2>Sapato Nike Black 2020</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum vel augue feugiat maximus. Donec varius pharetra nisi, nec venenatis dui blandit nec.</p>
					</div>
					<div className="footer">
						<span className="price">R$273,99</span>
						<button className="button">Add to cart</button>
					</div>
				</StyledShoe>
				<StyledShoe>
					<div className="img">
						<img src="/static/images/shoe-01.png" />
					</div>
					<div className="content">
						<h2>Sapato Nike Black 2020</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum vel augue feugiat maximus. Donec varius pharetra nisi, nec venenatis dui blandit nec.</p>
					</div>
					<div className="footer">
						<span className="price">R$273,99</span>
						<button className="button">Add to cart</button>
					</div>
				</StyledShoe>
				<StyledShoe>
					<div className="img">
						<img src="/static/images/shoe-02.png" />
					</div>
					<div className="content">
						<h2>Sapato Nike Black 2020</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum vel augue feugiat maximus. Donec varius pharetra nisi, nec venenatis dui blandit nec.</p>
					</div>
					<div className="footer">
						<span className="price">R$273,99</span>
						<button className="button">Add to cart</button>
					</div>
				</StyledShoe>
				<StyledShoe>
					<div className="img">
						<img src="/static/images/shoe-03.png" />
					</div>
					<div className="content">
						<h2>Sapato Nike Black 2020</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum vel augue feugiat maximus. Donec varius pharetra nisi, nec venenatis dui blandit nec.</p>
					</div>
					<div className="footer">
						<span className="price">R$273,99</span>
						<button className="button">Add to cart</button>
					</div>
				</StyledShoe>
			</Slider>
		);
	}

	componentDidMount() {
		this.setState({
			window: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		})
		window.addEventListener('resize', this.updateDimensions);
		console.log( this.state );
	}

	componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
	}
	
	updateDimensions = () => {
		this.setState({
			window: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		})
	}
	
}

const Hero = () => {
	return (
		<StyledHero>
			<HeroShoes></HeroShoes>
		</StyledHero>
	);
}

export default Hero;

