import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const SingleItemStyles = styled.div`
  display: flex;
  padding: 120px 0;

  .content {
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: ${props => props.theme.primary};
    }
  }

  .figure {
    max-width: 600px;
  }

  @media (min-width: 992px) {
    max-width: 760px;
    margin: 0 auto;
    .content {
      margin-left: 100px;
      max-width: 50%;
      flex: 1 1 auto;
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      image
    }
  }
`;

export class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error}></Error>;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found!</p>;
          console.log(data);
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>bShoes | {item.title}</title>
              </Head>
              <figure class="figure">
                <img src={item.image} alt={item.title} />
              </figure>
              <div class="content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
