import React, { Component } from 'react';
import Footer from '../components/Footer';
import Shopping from '../components/Shopping';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from './index';
import { perPage } from '../config';

export class ShoppingPage extends Component {
  render() {
    return (
      <>
        <Query
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: this.props.query.page * perPage - perPage
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading..</p>;
            if (error) return <p>Error.. {error.message}</p>;
            console.log(`query page ${this.props.query.page}`);
            return (
              <Shopping
                items={data.items}
                page={parseInt(this.props.query.page) || 1}
              />
            );
          }}
        </Query>
      </>
    );
  }
}

export default ShoppingPage;
