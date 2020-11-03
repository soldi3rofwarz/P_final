import React from 'react';
import './head.css';
//import Nav from 'react-bootstrap/Nav'
import {Link}from 'react-router-dom'


const Header = () => {

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
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
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
                <Link to="/"><li>Home</li></Link>
                <Link to="/actividades"><li>Actividades</li></Link>
                <Link to="/galeria"><li>Galería </li></Link>
                <Link to=""><li>Estadísticas </li></Link>
                <Link to="/form"><li>Formulario </li></Link>
            </ul>
        </nav>

    </>
    );

}
 
export default Header;