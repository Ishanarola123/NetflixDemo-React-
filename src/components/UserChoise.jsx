import React from 'react'
import Netflix from './Netflix';
import Amazon from './Amazon';

const UserchoiseSeries="amzon";

export default function UserChoise() {
  
if(UserchoiseSeries === "netflix"){
    return ( 
        <Netflix />
    )
    
}
else{
    return(
      <Amazon/>  
    )
}

}
export {UserchoiseSeries}
