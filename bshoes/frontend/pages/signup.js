import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';
import Container from '../components/styles/Container';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  > * {
    flex: 0 0 40%;
  }
`;
const SignupPage = () => {
  return (
    <Container>
      <Row>
        <Signup />
        <Signin />
        <RequestReset />
      </Row>
    </Container>
  );
};

export default SignupPage;
