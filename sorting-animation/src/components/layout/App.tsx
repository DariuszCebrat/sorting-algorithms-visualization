import React, { useEffect } from 'react';
import Container from '../general/Container';
import IconButton from '../general/IconButton';
import SortContainer from '../sort/SortContainer';
import { faUpRightAndDownLeftFromCenter,faRefresh } from '@fortawesome/free-solid-svg-icons';
import { useSortArrayDispatch } from '../../hooks/sortHooks';
import { createNewArray, handleMergeSort } from '../../store/sortArray-slice';
function App() {
  
  const arrayLength= 5;
  const dispatch = useSortArrayDispatch();
  useEffect(()=>{
    dispatch(createNewArray(arrayLength))
  })
  return (
    <main>
      <Container>
        <div className='containerMain'>
          <IconButton text='' icon={faRefresh} onClick={()=>dispatch(createNewArray(arrayLength))}/>
          <SortContainer/>
        </div>
        <IconButton text='Sort' icon={faUpRightAndDownLeftFromCenter} onClick={()=>dispatch(handleMergeSort())} />
      </Container>
    </main>
  );
}

export default App;
