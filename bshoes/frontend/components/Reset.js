import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;
export class Reset extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired
  };
  state = {
    password: '',
    confirmPassword: ''
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          ...this.state
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(resetPasword, { error, loading, called }) => {
          return (
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                await resetPasword();
                this.setState({ password: '', confirmPassword: '' });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Create your new pasword</h2>
                <Error error={error} />
                {!error && !loading && called && (
                  <p>Success! Check your email for a reset link</p>
                )}
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                  />
                </label>
                <label htmlFor="password">
                  Confirm Password
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    value={this.state.confirmPassword}
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

export default Reset;
