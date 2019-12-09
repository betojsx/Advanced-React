import React from 'react';
import styled from 'styled-components';
import Container from './styles/Container';

const StyledFooter = styled.footer`
  background: transparent;
  height: 20vw;
  background: url('/static/images/waves.png') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
    /* margin-bottom: 40px; */
  }
  .copyright {
    color: ${props => props.theme.white};
    text-align: right;
    strong {
      font-size: 18px;
      margin-bottom: 4px;
      display: block;
    }

    span {
      font-weight: 300;
      font-size: 14px;
    }
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <div className="copyright">
            <strong>bShoes is a fake shoes ecommerce</strong>
            <span>Made by Beto</span>
          </div>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
