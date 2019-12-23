import React from 'react';
import styled from 'styled-components';
import remSize from '../lib/remSize';
import Link from 'next/link';
import DeleteItem from './DeleteItem';

const StyledItem = styled.div`
  background: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.bsDefault};
  max-width: 290px;
  height: 360px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  transform: translateY(0);
  will-change: transform;
  transition: all 280ms ease;
  perspective: 200px;

  &:hover {
    transform: translateY(-08px);
    box-shadow: ${props => props.theme.bsActive};
  }

  .img {
    height: 180px;

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
  }

  .content {
    padding: 20px 30px 0;
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
    padding: 20px 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
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
const Item = ({ title, description, price, id, image }) => {
  image = image || '/static/images/shoe-01.png';
  return (
    <StyledItem key={id}>
      <Link href={`/item?id=${id}`}>
        <a>
          <div className="img">
            <img src={image} />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="footer">
            <span className="price">R${price}</span>
            <button className="button">Add to cart</button>
            <Link href={{ pathname: '/update', query: { id } }}>
              <DeleteItem className="button" id={id}>
                Delete
              </DeleteItem>
            </Link>
          </div>
        </a>
      </Link>
    </StyledItem>
  );
};

export default Item;
