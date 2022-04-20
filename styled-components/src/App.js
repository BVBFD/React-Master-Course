import React from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';

// basic concept of styled components
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

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  width: fit-content;
  padding: 0.4rem;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
  width: 10rem;
  margin-bottom: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const animate = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }

  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 2rem;
  user-select: none;
`;

const WrapperBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animate} 4s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  /* span {
    font-size: 2rem;
    user-select: none;
    &:hover {
      font-size: 5rem;
    }
    &:active {
      opacity: 0;
    }
  } */

  ${Emoji} {
    &:hover {
      font-size: 5rem;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = (props) => {
  return (
    <>
      <Father>
        <Box bgColor='lightblue' color='red'>
          Son
        </Box>
        <Circle bgColor='lightcoral' color='yellow'>
          Lee
        </Circle>
        <Btn>Log In</Btn>
        <Btn as='a' href='/'>
          Log In
        </Btn>
        <Input />
        <Input />
      </Father>
      <Wrapper>
        <WrapperBox>
          <Emoji>😘</Emoji>
        </WrapperBox>
      </Wrapper>
    </>
  );
};

export default App;
