import React, { useState } from 'react';
import './App.css';
import Circle from './Circle';
import styled from 'styled-components';

const App = () => {
  // const [value, setValue] = useState('');

  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   console.log(event.currentTarget.value);
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setValue(value);
  // };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('Hello', value);
  // };

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  const Button = styled.button`
    background-color: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <div>
      {/* <Circle borderColor='yellow' bgColor='teal' />
      <Circle text='I am here' bgColor='tomato' /> */}
      {/* <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='username'
        />
        <button>Log in</button>
      </form> */}
      <Container>
        <H1>Lee Seong Eun</H1>
        <Button>Click</Button>
      </Container>
    </div>
  );
};

export default App;
