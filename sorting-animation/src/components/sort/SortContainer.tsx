import React, { useEffect, useState }  from 'react'
import SortItem from './SortItem';
import { useSortArraySelector } from '../../hooks/sortHooks';
import { SortItem as SortItemType} from '../../models/Sort';
function SortContainer() {
    console.log("sort container rerender");
    const {items,isFinished} = useSortArraySelector((state)=>state.sortArray);
    // const [items,setItems] = useState<SortItemType[]>([]);
    // const {items:orginalItems,isFinished,animationData} = useSortArraySelector((state)=>state.sortArray);
    // useEffect(()=>{
    //     setItems(orginalItems);
    // },[orginalItems])
    // useEffect(()=>{
    //     if(animationData.left && animationData.right && animationData.toLeft){
    //         setItems(()=>{
    //             const newItems = [...items];
    //             const indexLeft = newItems.findIndex((x)=>x.id===animationData.left );
    //             const indexRight = newItems.findIndex((x)=>x.id===animationData.right );

    //              const newLeft = {
    //                 ...newItems[indexLeft], 
    //                 isSorting:animationData.toLeft
    //                // value: newItems[indexRight].value
    //             };
    //             const newRight = {
    //                 ...newItems[indexRight], 
    //                 isSorting:animationData.toLeft
    //                // value: newItems[indexLeft].value
    //             };

    //              newItems[indexLeft] = newLeft;
    //              newItems[indexRight] = newRight;
        
    //             return [...newItems];
    //         });
    //     }
        
    // },[animationData])
  return (
      <div id='sortContainer' className='sortContainer'>
          {items.map((item,index)=>(
              <SortItem key={index} value={item.value} isSorting={item.isSorting} isFinished={isFinished} />
          ))}
      </div>
  )
}

export default SortContainer