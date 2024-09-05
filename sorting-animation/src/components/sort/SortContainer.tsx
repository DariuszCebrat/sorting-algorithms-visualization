import React, { memo, useEffect, useState } from 'react'
import SortItem from './SortItem';
import {  useSortArraySelector } from '../../hooks/sortHooks';
import {SortItem as SortItemType} from "../../models/Sort"
type Props = {
    items:SortItemType[];
}
function SortContainer({items}:Props) {
    const {animationData,isFinished} = useSortArraySelector((state)=>state.sortArray);
    const [itemsUI ,setItemsUI] = useState<SortItemType[]>(items);
   useEffect(()=>{
    setItemsUI(items)
   },[items])
    useEffect(()=>{
        if(animationData.left && animationData.right ){
         
                setItemsUI((old)=>{
                    const prev = [...old];
                    if(animationData.changePlaces)
                    {
                        const leftIndex = prev.findIndex(x=>x.id===animationData.left);
                        const rightIndex = prev.findIndex(x=>x.id===animationData.right);
                        
                        var newRight={value:prev[leftIndex].value,isComparing:prev[leftIndex].isComparing,id:prev[rightIndex].id};
                        var newLeft={value:prev[rightIndex].value,isComparing:prev[rightIndex].isComparing,id:prev[leftIndex].id};
                        prev[leftIndex] = newLeft;
                        prev[rightIndex] = newRight;
                    }
                    
                    return [...prev];
                })
        }
       
    },[animationData,items])

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