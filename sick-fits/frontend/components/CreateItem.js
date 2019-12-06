import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: 'Cool shoes',
    description: 'The cool shoes',
    image: '',
    largeImage: '',
    price: 0
  };

  handleChange(event) {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }

  uploadFile = async event => {
    console.log('uploading file...');
    const { files } = event.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'bshoes');

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/betocorp/image/upload`,
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    const { title, description, image, largeImage, price } = this.state;
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItemFn, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createItemFn();
              console.log(res);
              Router.push({
                pathname: '/item',
                query: { id: res.data.createItem.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">Image</label>
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                required
                onChange={this.uploadFile}
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                onChange={this.handleChange.bind(this)}
                value={title}
              />
              <label htmlFor="price">Price</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                required
                onChange={this.handleChange.bind(this)}
                value={description}
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                required
                onChange={this.handleChange.bind(this)}
                value={price}
              />
              <button type="sumit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
