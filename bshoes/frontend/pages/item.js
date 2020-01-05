import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import remSize from '../lib/remSize';
import About from '../components/About';
import Footer from '../components/Footer';

import { Query } from 'react-apollo';

import SingleItem from '../components/SingleItem';

// Good practice: write queries variables in caps

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
    color: ${prop => prop.theme.white};
  }
`;

const Item = props => {
  return (
    <div>
      <SingleItem id={props.query.id} />
      <ParallaxSection>
        <h2>ALL YOU NEED IS HERE</h2>
      </ParallaxSection>
      <About />
      <Footer />
    </div>
  );
};

export default Item;
export { ALL_ITEMS_QUERY };
