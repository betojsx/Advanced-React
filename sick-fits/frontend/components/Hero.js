import React, { Component } from 'react';
import styled from 'styled-components';
import remSize from '../lib/remSize';
import Link from 'next/link';
import Slider from 'react-slick';

const StyledHero = styled.div`
  min-height: 680px;
  background-image: url('/static/images/pattern.png');
  background-size: cover;
  background-position: center;
  background-color: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 70%;
    margin: 0 auto;
  }
`;

const StyledShoe = styled.div`
  background: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.bsDefault};
  max-width: 370px;
  height: 360px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  .img {
    height: 180px;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
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
  }
`;

export class HeroShoes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      window: {
        width: 0,
        height: 0
      }
    };
  }

  render() {
    const SlideSettings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };
    const { items } = this.props;

    return (
      <Slider {...SlideSettings}>
        {items.map(({ title, description, price, id, image }) => {
          image = image || '/static/images/shoe-01.png';
          return (
            <StyledShoe key={id}>
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
                  <button className="button">Edit</button>
                </Link>
              </div>
            </StyledShoe>
          );
        })}
      </Slider>
    );
  }

  componentDidMount() {
    this.setState({
      window: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
    window.addEventListener('resize', this.updateDimensions);
    console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      window: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };
}

const Hero = ({ items }) => {
  return (
    <StyledHero>
      <HeroShoes items={items}></HeroShoes>
    </StyledHero>
  );
};

export default Hero;
