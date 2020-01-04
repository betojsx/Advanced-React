import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import remSize from '../lib/remSize';
import About from '../components/About';
import Footer from '../components/Footer';
import { perPage } from '../config';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Good practice: write queries variables in caps
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

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

const Home = props => {
  return (
    <div>
      <Query query={ALL_ITEMS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading..</p>;
          if (error) return <p>Error.. {error.message}</p>;
          console.log(`there's ${data.items.length} items`);
          return <Hero items={data.items} />;
        }}
      </Query>
      <ParallaxSection>
        <h2>ALL YOU NEED IS HERE</h2>
      </ParallaxSection>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
export { ALL_ITEMS_QUERY };
