import React from 'react';
import styled from 'styled-components';
import './App.css';
import Circle from './Circle';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};

const App = () => {
  return (
    <Container>
      <Circle bgColor='teal' borderColor='yellow' text='Hi' />
      <form>
        <button onClick={onClick}>click me</button>
      </form>
    </Container>
  );
};

export default App;
