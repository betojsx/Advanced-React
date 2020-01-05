import React from 'react';
import Link from 'next/link';
import remSize from '../lib/remSize';
import styled from 'styled-components';
import User from './User';
import ButtonClear from './styles/ButtonClear';
import Signout from './Signout';
const StyledLink = styled.a`
  font-weight: 700;
  font-size: 1rem;
  color: ${props => props.theme.dark};
  &,
  &:hover {
    text-decoration: none;
  }
`;
const Separator = styled.span`
  display: inline-block;
  height: ${props => remSize(26)};
  width: 1px;
  background: #d1d1e9;
  margin: 0 2rem;
  vertical-align: middle;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Nav = () => {
  return (
    <User>
      {({ data: { currentUser } }) => (
        <StyledNav>
          {currentUser && (
            <>
              <span>Hello, {currentUser.name}</span>
              <Separator />
              <Link href="/" passHref={true}>
                <StyledLink style={{ marginRight: '2rem' }}>
                  My account
                </StyledLink>
              </Link>
              <ButtonClear>
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M18.5667 10.5932L20.2287 3.28075C20.3486 2.75277 19.9473 2.25 19.4059 2.25H5.59716L5.27491 0.674648C5.19462 0.281988 4.8491 0 4.44828 0H0.84375C0.377754 0 0 0.377754 0 0.84375V1.40625C0 1.87225 0.377754 2.25 0.84375 2.25H3.30057L5.77023 14.3239C5.17939 14.6637 4.78125 15.3008 4.78125 16.0312C4.78125 17.1186 5.66269 18 6.75 18C7.83731 18 8.71875 17.1186 8.71875 16.0312C8.71875 15.4802 8.4921 14.9824 8.12728 14.625H15.4977C15.1329 14.9824 14.9062 15.4802 14.9062 16.0312C14.9062 17.1186 15.7877 18 16.875 18C17.9623 18 18.8437 17.1186 18.8437 16.0312C18.8437 15.2518 18.3907 14.5782 17.7335 14.2592L17.9275 13.4057C18.0475 12.8778 17.6462 12.375 17.1047 12.375H7.66818L7.43808 11.25H17.744C18.1379 11.25 18.4794 10.9774 18.5667 10.5932Z"
                      fill="#2B2C34"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20.25" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </ButtonClear>
              <Signout />
            </>
          )}
          {!currentUser && (
            <>
              <Link href="/signup" passHref={true}>
                <StyledLink style={{ marginRight: '2rem' }}>
                  Create account / Login
                </StyledLink>
              </Link>
              <ButtonClear>
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M18.5667 10.5932L20.2287 3.28075C20.3486 2.75277 19.9473 2.25 19.4059 2.25H5.59716L5.27491 0.674648C5.19462 0.281988 4.8491 0 4.44828 0H0.84375C0.377754 0 0 0.377754 0 0.84375V1.40625C0 1.87225 0.377754 2.25 0.84375 2.25H3.30057L5.77023 14.3239C5.17939 14.6637 4.78125 15.3008 4.78125 16.0312C4.78125 17.1186 5.66269 18 6.75 18C7.83731 18 8.71875 17.1186 8.71875 16.0312C8.71875 15.4802 8.4921 14.9824 8.12728 14.625H15.4977C15.1329 14.9824 14.9062 15.4802 14.9062 16.0312C14.9062 17.1186 15.7877 18 16.875 18C17.9623 18 18.8437 17.1186 18.8437 16.0312C18.8437 15.2518 18.3907 14.5782 17.7335 14.2592L17.9275 13.4057C18.0475 12.8778 17.6462 12.375 17.1047 12.375H7.66818L7.43808 11.25H17.744C18.1379 11.25 18.4794 10.9774 18.5667 10.5932Z"
                      fill="#2B2C34"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20.25" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </ButtonClear>
            </>
          )}
        </StyledNav>
      )}
    </User>
  );
};

export default Nav;
