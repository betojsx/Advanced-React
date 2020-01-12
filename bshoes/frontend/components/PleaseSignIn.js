import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import React from 'react';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      console.log(data);
      if (loading) return <p>Loading...</p>;
      if (!data.currentUser) {
        return (
          <div>
            <h1>Please Sign In before continuing</h1>
            <Signin />
          </div>
        );
      }

      return props.children;
    }}
  </Query>
);
export default PleaseSignIn;
