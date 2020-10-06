import React from 'react';
import './main.css'


const Index = () => {

    const move = ()=>{
        document.addEventListener("mousemove", function(e){
            const bg = document.querySelector('.bg')
            const bird =document.querySelector('.bird')
            const content = document.querySelector('.content');
            
        
        
            bg.style.width = 100+e.pageX/100+ '%';
            bg.style.height = 100+e.pageX/100+ '%';
        
            bird.style.right = 100+e.pageX/2+ 'px';
            content.style.left = 100+e.pageX/2+ 'px';
        })
        
    }
    return ( 
    <section className="main"
        onMouseMove={move}
    >
        <header>
        <a href="#" className="logo">world</a>
            <div className="toggle"></div>
        </header>
        <img src={`${process.env.PUBLIC_URL}/res/bg.jpg`} alt=""  className="bg"/>
        <img src={`${process.env.PUBLIC_URL}/res/bird.png`}  className="bird" alt="" />
        <div className="content">
            <h2><br/><span>BagaMundo</span></h2>
           
            <a href="#">Unete</a>
        </div>
        <ul className="sci">
            <li><a href="#"><img src={`${process.env.PUBLIC_URL}/res/facebook.png`} alt="" /></a></li>
            <li><a href="#"><img src={`${process.env.PUBLIC_URL}/res/twitter.png`} alt="" /></a></li>
            <li><a href="#"><img src={`${process.env.PUBLIC_URL}/res/instagram.png`} alt="" /></a></li>
        </ul>

    </section>
);
}
 
export default Index;