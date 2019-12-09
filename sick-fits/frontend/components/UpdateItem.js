import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $title: String
    $description: String
    $price: Int
    $id: ID!
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
    }
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      title
      description
      price
      id
    }
  }
`;

class UpdateItem extends Component {
  state = {};

  handleChange(event) {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }

  /*  uploadFile = async event => {
    console.log('uploading file...');
    NProgress.start();
    const { files } = event.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'bshoes');
    let res;
    try {
      res = await fetch(
        `https://api.cloudinary.com/v1_1/betocorp/image/upload`,
        {
          method: 'POST',
          body: data
        }
      );
    } catch (err) {
      NProgress.done();
    }

    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
    NProgress.done();
  }; */
  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log('updating item...');
    console.log(this.state);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });

    console.log(res);
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error: {error}</p>;
          if (!data.item) return <p>No item found with ID {this.props.id}</p>;
          const { title, description, image, largeImage, price } = data.item;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION}>
              {(updateItemFn, { loading, error }) => (
                <Form onSubmit={e => this.updateItem(e, updateItemFn)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      required
                      onChange={this.handleChange.bind(this)}
                      defaultValue={title}
                    />
                    <label htmlFor="price">Price</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Description"
                      required
                      onChange={this.handleChange.bind(this)}
                      defaultValue={description}
                    />
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      required
                      onChange={this.handleChange.bind(this)}
                      defaultValue={price}
                    />
                    <button type="sumit">Save Changes</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
