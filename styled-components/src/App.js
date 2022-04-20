import React from 'react';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.backgroundColor};
`;

const App = (props) => {
  return (
    <Wrapper>
      <Title>Hello, My Name is Seong Eun Lee</Title>
    </Wrapper>
  );
};

export default App;
