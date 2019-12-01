import React from 'react';
import Link from "next/link";
import remSize from '../lib/remSize';
import styled from 'styled-components';

const StyledLink = styled.a`
	font-weight: 700;
	font-size: 1rem;
	color: ${props => props.theme.dark };
	&, 
	&:hover {
		text-decoration: none;
	}
`
const Separator = styled.span`
	display: inline-block;
	height: ${ props => remSize(26) };
	width: 1px;
	background: #D1D1E9;
	margin: 0 2rem;
	vertical-align: middle;
`

const ButtonClear = styled.button`
	background: none;
	border: 0;
	padding: 0;
	cursor: pointer;
	&:not(:last-of-type) {
		margin-right: 2rem;
	}

	&,
	&:focus {
		outline: none;
	}
`

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
`

const Nav = () => {
	return (
		<StyledNav>
			<Link href="/" passHref={true}>
				<StyledLink>My account</StyledLink>
			</Link>
			<Separator />
			<ButtonClear>
				<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0)">
						<path d="M18.5667 10.5932L20.2287 3.28075C20.3486 2.75277 19.9473 2.25 19.4059 2.25H5.59716L5.27491 0.674648C5.19462 0.281988 4.8491 0 4.44828 0H0.84375C0.377754 0 0 0.377754 0 0.84375V1.40625C0 1.87225 0.377754 2.25 0.84375 2.25H3.30057L5.77023 14.3239C5.17939 14.6637 4.78125 15.3008 4.78125 16.0312C4.78125 17.1186 5.66269 18 6.75 18C7.83731 18 8.71875 17.1186 8.71875 16.0312C8.71875 15.4802 8.4921 14.9824 8.12728 14.625H15.4977C15.1329 14.9824 14.9062 15.4802 14.9062 16.0312C14.9062 17.1186 15.7877 18 16.875 18C17.9623 18 18.8437 17.1186 18.8437 16.0312C18.8437 15.2518 18.3907 14.5782 17.7335 14.2592L17.9275 13.4057C18.0475 12.8778 17.6462 12.375 17.1047 12.375H7.66818L7.43808 11.25H17.744C18.1379 11.25 18.4794 10.9774 18.5667 10.5932Z" fill="#2B2C34"/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="20.25" height="18" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			</ButtonClear>
			<ButtonClear>
				<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.7094 9.4709L13.709 16.6995C13.084 17.3449 12.0006 16.8931 12.0006 15.968V11.8374H6.33365C5.77945 11.8374 5.3336 11.377 5.3336 10.8047V6.67412C5.3336 6.10186 5.77945 5.64146 6.33365 5.64146H12.0006V1.51084C12.0006 0.590051 13.0798 0.133961 13.709 0.779371L20.7094 8.00797C21.0969 8.41242 21.0969 9.06644 20.7094 9.4709ZM8.0004 16.4844V14.7633C8.0004 14.4793 7.77539 14.2469 7.50037 14.2469H4.0002C3.26266 14.2469 2.6668 13.6316 2.6668 12.8701V4.60881C2.6668 3.84722 3.26266 3.23193 4.0002 3.23193H7.50037C7.77539 3.23193 8.0004 2.99958 8.0004 2.7156V0.994508C8.0004 0.710527 7.77539 0.47818 7.50037 0.47818H4.0002C1.79176 0.47818 0 2.32836 0 4.60881V12.8701C0 15.1505 1.79176 17.0007 4.0002 17.0007H7.50037C7.77539 17.0007 8.0004 16.7683 8.0004 16.4844Z" fill="#2B2C34"/>
				</svg>
			</ButtonClear>
		</StyledNav>
	);
}

export default Nav;
