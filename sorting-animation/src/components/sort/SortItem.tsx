import React from 'react'
type Props={
    value:number;
    isSorting:boolean;
    isFinished:boolean;
}

const  SortItem =  ({value,isSorting,isFinished}:Props) =>{
  console.log("rerendering!!!"+ value )
  return (
    <div className='sortItem' 
      style={{height:`${value.toString()+"px"}`,
              backgroundColor:`${isFinished?"#040404":(isSorting?"red":"#FEFEFE")}`}}></div>
  )
}

export default SortItem