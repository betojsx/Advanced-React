import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import styled from 'styled-components';
import remSize from '../lib/remSize';
import About from '../components/About';
import Footer from '../components/Footer';

const ParallaxSection = styled.div`
	height: 140px;
	background: url('/static/images/fixed-bg.jpg') no-repeat center;
	background-attachment: fixed;
	background-size: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	h2 {
		margin: 0;
		font-size: ${prop => remSize(48)};
		text-transform: uppercase;
		mix-blend-mode: soft-light;
		font-weight: 700;
		color: ${ prop => prop.theme.white }
	}
`

const Home = (props) => {
	return (
		<div>
			<Hero />
			<ParallaxSection>
				<h2>ALL YOU NEED IS HERE</h2>
			</ParallaxSection>
			<About />
			<Footer />
		</div>
	);
}

export default Home;
