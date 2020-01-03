import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ItemGrid from './ItemsGrid';
import remSize from '../lib/remSize';

const Section = styled.section`
  min-height: calc(100vh - 70px);
  background: #f9f9f9;
  padding: 40px 0;
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
  font-size: ${() => remSize(42)};
  font-weight: 700;
  margin-bottom: 40px;
`;

export class Shopping extends Component {
  render() {
    return (
      <Section>
        <div className="container">
          <Title>Shopping</Title>
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
