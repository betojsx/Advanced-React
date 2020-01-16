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
  padding: 120px 0;
  > div {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    > div {
      max-width: 992px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex: 0 0 calc(33% - 20px);
    margin: 0 10px;
    margin-bottom: 30px;
    justify-content: space-between;

    &:last-child {
      margin-right: auto;
    }
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
      <Row>
        {items.map(item => {
          return <Item {...item} id={item.id} />;
        })}
      </Row>
    );
  }

  componentDidMount() {
    this.setState({
      window: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
    // window.addEventListener('resize', this.updateDimensions);
    // console.log(this.state);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.updateDimensions);
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
