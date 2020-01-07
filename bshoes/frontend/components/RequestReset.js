import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;
export class RequestReset extends Component {
  state = {
    email: ''
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(resetPasword, { error, loading, called }) => {
          return (
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                await resetPasword();
                this.setState({ email: '' });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Reset your pasword</h2>
                <Error error={error} />
                {!error && !loading && called && (
                  <p>Success! Check your email for a reset link</p>
                )}
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                </label>

                <button type="submit">Reset password</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default RequestReset;
