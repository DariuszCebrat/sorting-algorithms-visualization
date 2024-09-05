import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition} from '@fortawesome/free-solid-svg-icons'
import React, { ComponentPropsWithoutRef } from 'react'
type Props={
    text:string;
    icon:IconDefinition  ;
    disabled?:boolean;
}&ComponentPropsWithoutRef<'button'>;
function IconButton({text,icon,disabled,...props}:Props) {
  return (
    <div className='center'>
        <button disabled={disabled} {...props} ><FontAwesomeIcon icon={icon} /> {text}</button>
    </div>
  )
}

export default IconButton