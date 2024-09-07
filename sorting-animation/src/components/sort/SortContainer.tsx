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
    if(movedData.right && movedData.left)
    {
        setItemsUI((prev)=>{
            const items = [...prev];

                const leftIndex = items.findIndex(x=>x.id === movedData.left);
                const rightIndex = items.findIndex(x=>x.id === movedData.right);
                const tempValue = items[leftIndex].value;
                if( items[leftIndex].value>=items[rightIndex].value){
                    items[leftIndex]={id:items[leftIndex].id,value:items[rightIndex].value}
                    items[rightIndex]={id:items[rightIndex].id,value:tempValue}
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

export default SortContainer