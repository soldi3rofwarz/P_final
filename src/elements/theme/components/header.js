import React from 'react';
import './head.styles.css';
//import Nav from 'react-bootstrap/Nav'
import {Link}from 'react-router-dom'


const Header = ({signout, onLogout, user}) => {

    const Cerrar = () => {
        signout()
        onLogout()
    }

    
   
    return (     
    <>
        <nav>
            

            {/* <div className="logo">
                <img src='logo.png'/>
            </div> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/actividades">Actividades</Link></li>
                <li><Link to="/galeria">Galería</Link></li>
                <li><Link to="/datos">Estadísticas </Link></li>
                <li><Link to="/form">Formulario </Link></li>
                <li><Link to="/loginGoogle">Cliente </Link></li>
                {user?<li onClick={Cerrar}><Link to ="/loginGoogle">cerrar sesion</Link></li>: null}
                

            </ul>
        </nav>

    </>
    );

}
 
export default Header;