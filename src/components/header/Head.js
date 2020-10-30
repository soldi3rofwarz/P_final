import React from 'react';
import './head.css';
import Nav from 'react-bootstrap/Nav'


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

     
    <section>
        <nav onScroll = {Scroll2}>
            

            <div className="logo">
                <img src='logo.png'/>
            </div>
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#">Actividades</a> </li>
                <li><a href="#">Galería</a> </li>
                <li><a href="#">Estadísticas</a> </li>
                <li><a href="#">Formulario</a> </li>
            </ul>
        </nav>
    </section> 
    </>
    );

}
 
export default Header;