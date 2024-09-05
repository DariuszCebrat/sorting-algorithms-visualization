import React from 'react'
import SortItem from './SortItem';
import { SortItem as SortItemType } from '../../models/Sort';

function SortContainer() {
    const SortItems:SortItemType[]=[{value:22,isSorting:true},{value:10,isSorting:false},{value:5,isSorting:false}];
  return (
    <div className='center sortContainer'>
        {SortItems.map((item,index)=>(
            <div key={index}>
                <SortItem value={item.value} isSorting={item.isSorting}/>
            </div>
        ))}
    </div>
  )
}

export default SortContainer