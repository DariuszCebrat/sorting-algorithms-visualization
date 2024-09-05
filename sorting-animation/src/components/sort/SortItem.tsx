import React, { memo } from 'react'
type Props={
    value:number;
    isComparing:boolean;
    isFinished:boolean;
}

const  SortItem =  ({value,isComparing,isFinished}:Props) =>{
  return (
    <div className='sortItem' 
      style={{height:`${value.toString()+"px"}`,
              backgroundColor:`${isFinished?"#040404":(isComparing?"green":"white")}`}}></div>
  )
}

export default memo(SortItem)