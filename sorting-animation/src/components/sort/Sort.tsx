import React, { useEffect } from 'react'
import { useSortArrayDispatch, useSortArraySelector } from '../../hooks/sortHooks';
import SortContainer from './SortContainer';
import { createNewArray } from '../../store/sortArray-slice';
import { arrayLength } from '../../models/Sort';

function Sort() {
    const dispatch = useSortArrayDispatch();
    useEffect(()=>{
        dispatch(createNewArray(arrayLength))
      },[dispatch])
    const {items} = useSortArraySelector((state)=>state.sortArray);

  return (
    <SortContainer items={items}/>
  )
}

export default Sort