import React from 'react'
import {Link} from 'react-router-dom'

 const Hero =({signout, user})=>{
     console.log(user)
    return(
        
        <>
        
         <li onClick={signout}><Link to ="/loginGoogle">cerrar sesion</Link></li>
       
        </>
    )
}
export default Hero