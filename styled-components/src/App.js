import React from 'react';
import './App.css';
import styled from 'styled-components';

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100px;
  height: 100px;
  font-size: 1.2rem;
  font-weight: bolder;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const App = (props) => {
  return (
    <Father>
      <Box bgColor='lightblue' color='red'>
        Son
      </Box>
      <Circle bgColor='lightcoral' color='yellow'>
        Lee
      </Circle>
    </Father>
  );
};

export default App;
