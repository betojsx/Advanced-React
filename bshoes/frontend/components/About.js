import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './styles/Container';
import remSize from '../lib/remSize';

const StyledSection = styled.section`
	padding: 70px 0;
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`
const FeaturedImage = styled.div`
	border-radius: 12px;
	height: 771px;
	width: 706px;
	flex: 0 0 706px;

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`
const Content = styled.div`
	padding-top: 80px;
	margin-top: 40px;
	max-width: 420px;
	border-top: 2px solid ${props => props.theme.primary };
	h2 {
		font-size: ${props => remSize(48)};
		font-weight: 700;
		margin-bottom: 40px;
		color: ${props => props.theme.dark };
	}

	p {
		color: ${props => props.theme.dark };
		font-size: ${props => remSize(24)};
		line-height: 1.6;
	}
`

export class About extends Component {
	render() {
		return (
			<StyledSection>
				<Container>
					<Row>
						<FeaturedImage>
							<img src="/static/images/shoe-section.png" />
						</FeaturedImage>
						<Content>
							<h2>We have the best shoes on the planet</h2>
							<p>Etiam dolor nulla, imperdiet ut erat sed, efficitur mollis ipsum. Proin at erat feugiat eros aliquam auctor. Nullam porta mauris molestie augue faucibus ultricies. Cras massa tellus, convallis sit amet libero sit amet, luctus molestie nisl. Integer ac vulputate sem. Vestibulum velit enim, consectetur non nulla ut</p>
						</Content>
					</Row>
				</Container>
			</StyledSection>
		);
	}
}

export default About;
