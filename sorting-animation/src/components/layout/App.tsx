import React from 'react';
import Container from '../general/Container';
import IconButton from '../general/IconButton';
import { faUpRightAndDownLeftFromCenter,faRefresh } from '@fortawesome/free-solid-svg-icons';
import { useSortArrayDispatch, useSortArraySelector } from '../../hooks/sortHooks';
import { createNewArray } from '../../store/sortArray-slice';
import { startMergeSort } from '../functions/mergeSort';
import Sort from '../sort/Sort';
import { arrayLength } from '../../models/Sort';
function App() {
  const {isFinished} = useSortArraySelector(state=>state.sortArray)
  const dispatch = useSortArrayDispatch();
  return (
    <main>
      <Container>
        <div className='containerMain'>
          <IconButton text='' icon={faRefresh} onClick={()=>dispatch(createNewArray(arrayLength)) } disabled={!isFinished}/>
          <Sort/>
        </div>
        <IconButton text='Sort' icon={faUpRightAndDownLeftFromCenter} onClick={()=>dispatch( startMergeSort(2000)) } disabled={!isFinished} />
      </Container>
    </main>
  );
}

export default App;
