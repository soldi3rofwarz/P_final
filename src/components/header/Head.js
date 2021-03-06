import React from 'react';
import './head.css';
//import Nav from 'react-bootstrap/Nav'
import {Link}from 'react-router-dom'

const Header = ({signout}) => {

    const Scroll2 = () => {
        (window).on('scroll', function(){
            if((window).scrollTop()){
                ('nav').addClass('black');
            }
            else
            {
                ('nav').removeClass('black');
            }
        })
    }
   
    return (     
    <>

    {/* <Nav className="justify-content-end" activeKey="/home" >
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav> */}
        <nav onScroll = {Scroll2}>
            {/* <div className="logo">
                <img src='logo.png'/>
            </div> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/actividades">Actividades</Link></li>
                <li><Link to="/galeria">Galería</Link></li>
                <li><Link to="/datos">Estadísticas</Link></li>
                <li><Link to="/form">Formulario </Link></li>
                <li><Link to="/login">Cliente </Link></li>
                <li onClick={signout}><Link to ="/loginGoogle">cerrar sesion</Link></li>
            </ul>
        </nav>
    </>
    );
}
 
export default Header;