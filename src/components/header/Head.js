import React from 'react';
import './head.css';


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
    <section>
    <nav 
            onscroll = {Scroll2}
    >

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