import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';
import Container from "./styles/Container";

const StyledHeader = styled.header`
	
	background: ${props => props.theme.white };

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
	}
`
const Logo = styled.div`
	max-width: 160px;
`;

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<div className="row">
					<Logo>
						<img src="/static/images/logo.png"/>
					</Logo>
					<Nav />
				</div>
			</Container>
		</StyledHeader>
	);
}

export default Header;
