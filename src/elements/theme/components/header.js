import React,{useContext} from 'react';
import './head.styles.css';
//import Nav from 'react-bootstrap/Nav'
import {Link}from 'react-router-dom'

import {UserContext} from './../../../api/data/user-data'


const Header = ({signout}, props) => {
   const email = useContext(UserContext)
   
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
                <li onClick={signout}><Link to ="/loginGoogle" style={{textDecoration:'none'}}>cerrar sesion</Link></li>

            </ul>
        </nav>

    </>
    );

}
 
export default Header;