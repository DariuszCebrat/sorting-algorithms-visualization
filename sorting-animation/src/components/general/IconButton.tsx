import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition} from '@fortawesome/free-solid-svg-icons'
import React, { ComponentPropsWithoutRef } from 'react'
type Props={
    text:string;
    icon:IconDefinition  ;
}&ComponentPropsWithoutRef<'button'>;
function IconButton({text,icon,...props}:Props) {
  console.log("button render")
  return (
    <div className='center'>
        <button {...props} ><FontAwesomeIcon icon={icon} /> {text}</button>
    </div>
  )
}

export default IconButton