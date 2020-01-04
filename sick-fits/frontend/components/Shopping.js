import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ItemGrid from './ItemsGrid';
import remSize from '../lib/remSize';
import Pagination from './Pagination';

const Hero = styled.div`
  height: 420px;
  background-image: url('/static/images/shopping-hero.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -200px;
  position: relative;
  margin-bottom: 40px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Section = styled.section`
  min-height: calc(100vh - 70px);
  background: #f9f9f9;
  padding: 0 0 40px;
  .container {
    margin: 0 auto;
    max-width: ${props => props.theme.containerWidth};
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 14%;
  mix-blend-mode: soft-light;
  color: white;
  font-size: 10rem;
  font-weight: 700;
`;

export class Shopping extends Component {
  render() {
    return (
      <Section>
        <Hero>
          <Title>Shopping</Title>
        </Hero>
        <div className="container">
          <Pagination page={this.props.page} />
          <Grid>
            {this.props.items.map(item => {
              return <ItemGrid {...item} />;
            })}
          </Grid>
        </div>
        <Footer />
      </Section>
    );
  }
}

export default Shopping;
