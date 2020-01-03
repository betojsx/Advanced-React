import React, { Component } from 'react';
import Footer from '../components/Footer';
import Shopping from '../components/Shopping';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from './index';

export class ShoppingPage extends Component {
  render() {
    return (
      <>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading..</p>;
            if (error) return <p>Error.. {error.message}</p>;
            console.log(`there's ${data.items.length} items`);
            return <Shopping items={data.items} />;
          }}
        </Query>
      </>
    );
  }
}

export default ShoppingPage;
