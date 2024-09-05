import React from 'react';
import Container from '../general/Container';
import Button from '../general/Button';
import SortContainer from '../sort/SortContainer';

function App() {
  return (
    <Container>
      <SortContainer/>
      <Button text='Generate New Array' />
      <Button text='Sort'/>
    </Container>
  );
}

export default App;
