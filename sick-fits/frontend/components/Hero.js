import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Item from './Item';

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
        {items.map(item => {
          return <Item {...item} id={item.id} />;
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
