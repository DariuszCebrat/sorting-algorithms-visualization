import React from 'react'
type Props={
    value:number;
    isSorting:boolean;
}
function SortItem({value,isSorting}:Props) {
  return (
    <div className='sortItem' style={{height:`${value.toString()+"px"}`, backgroundColor:`${isSorting?"#b25133":"#F2A65A"}`}}>
        
    </div>
  )
}

export default SortItem