import React from 'react';
import styled from 'styled-components';
import remSize from '../lib/remSize';
import Link from 'next/link';
import DeleteItem from './DeleteItem';

const StyledItem = styled.div`
  height: 360px;
  padding: 30px;
  position: relative;
  &:not(:nth-child(3n)) {
    border-right: 1px solid #efedfd;
  }

  &:nth-child(n + 4) {
    border-top: 1px solid #efedfd;
  }

  flex: 0 0 33%;

  .img {
    height: 180px;
    margin-bottom: 20px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  a {
    display: block;
    height: 100%;
    text-decoration: none;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .content {
    color: ${props => props.theme.dark};
    margin-bottom: ${() => remSize(10)};
    h2 {
      font-weight: 700;
      margin-bottom: ${() => remSize(8)};
      font-size: ${() => remSize(16)};
    }

    p {
      font-size: ${() => remSize(14)};
      line-height: ${() => remSize(19)};
      margin-bottom: 0;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding-left: 30px;
    padding-right: 30px;
  }

  .button {
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    &,
    &:focus {
      outline: none;
    }
  }

  .price,
  .button {
    font-size: ${() => remSize(14)};
    font-weight: 400;
    color: ${props => props.theme.dark};
  }
`;
const ItemGrid = ({ title, description, price, id, image }) => {
  image = image || '/static/images/shoe-01.png';
  return (
    <StyledItem key={id}>
      <div className="img">
        <img src={image} />
      </div>
      <div className="content">
        <h2>{title}</h2>
      </div>
      <div className="footer">
        <span className="price">R${price}</span>
        <button className="button">Add to cart</button>
      </div>
      <Link href={`/item?id=${id}`}>
        <a></a>
      </Link>
    </StyledItem>
  );
};

export default ItemGrid;
