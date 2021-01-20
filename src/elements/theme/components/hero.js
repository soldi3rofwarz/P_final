import React from 'react '

export default Hero =({signout})=>{
    return(
        <li onClick={signout}><Link to ="/loginGoogle">cerrar sesion</Link></li>
    )
}