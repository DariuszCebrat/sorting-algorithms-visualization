import React, { memo, useEffect, useState } from 'react'
import SortItem from './SortItem';
import {  useSortArraySelector } from '../../hooks/sortHooks';
import {SortItem as SortItemType} from "../../models/Sort"
type Props = {
    items:SortItemType[];
}
function SortContainer({items}:Props) {
    const {animationData,isFinished,movedData} = useSortArraySelector((state)=>state.sortArray);
    const [itemsUI ,setItemsUI] = useState<SortItemType[]>(items);
   useEffect(()=>{
    setItemsUI(items)
   },[items])
   useEffect(()=>{
    if(movedData.right && movedData.left && movedData.newLeftValue!==0 && movedData.newRightValue!==0)
    {
        setItemsUI((prev)=>{
            const items = [...prev];
            if(movedData.newLeftValue<movedData.newRightValue){
                const leftIndex = items.findIndex(x=>x.id === movedData.left);
                const rightIndex = items.findIndex(x=>x.id === movedData.right);
                items[leftIndex]={id:items[leftIndex].id,value:movedData.newLeftValue}
                items[rightIndex]={id:items[rightIndex].id,value:movedData.newRightValue}
            }
            return [...items];
        })
    }
   },[movedData]) 
  return (
      <div id='sortContainer' className='sortContainer'>
          {
          itemsUI.map((item,index)=>(
              <SortItem key={index} value={item.value} isComparing={item.id===animationData.left || item.id===animationData.right} isFinished={isFinished}/>
          ))}
      </div>
  )
}

export default memo(SortContainer)