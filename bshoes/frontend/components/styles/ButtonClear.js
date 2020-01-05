import styled from 'styled-components';
const ButtonClear = styled.button`
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 2rem;
  }

  &,
  &:focus {
    outline: none;
  }
`;

export default ButtonClear;
