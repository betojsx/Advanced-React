import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav';
import Container from './styles/Container';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  background: ${props => props.theme.white};

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
`;
const Logo = styled.div`
  max-width: 160px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="row">
          <Link href="/">
            <Logo>
              <img src="/static/images/logo.png" />
            </Logo>
          </Link>
          <Nav />
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
