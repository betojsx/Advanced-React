import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { perPage } from '../config';
import PaginationStyles from './styles/PaginationStyles';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

export class Pagination extends Component {
  render() {
    return (
      <Query query={PAGINATION_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          const count = data.itemsConnection.aggregate.count;
          const pages = Math.ceil(count / perPage);
          const page = this.props.page;
          return (
            <PaginationStyles>
              <Link
                prefetch
                href={{
                  pathname: 'shopping',
                  query: { page: page - 1 }
                }}
              >
                <a className="prev" aria-disabled={page <= 1}>
                  &larr; Prev
                </a>
              </Link>
              <p>
                Page {page} of {pages}
              </p>
              <Link
                prefetch
                href={{
                  pathname: 'shopping',
                  query: { page: page + 1 }
                }}
              >
                <a className="prev" aria-disabled={page >= pages}>
                  Next &rarr;
                </a>
              </Link>
            </PaginationStyles>
          );
        }}
      </Query>
    );
  }
}

export default Pagination;
