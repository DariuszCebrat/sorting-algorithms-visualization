import React, { ComponentPropsWithoutRef } from 'react'
type Props={
    text:string;
}&ComponentPropsWithoutRef<'button'>;
function Button({text,...props}:Props) {
  return (
    <div className='center'>
        <button {...props} >{text}</button>
    </div>
  )
}

export default Button