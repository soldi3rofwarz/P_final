import React from 'react';
import './main.css'


const Index = () => {
    const movimiento =()=>{
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
        onMouseMove={movimiento}
    >
        <header>
        <a href="#" className="logo">world</a>
            <div className="toggle"></div>
        </header>
        <img src="./../../../assets/assetsMain/bg.jpg" className="bg"></img>
        <img src="./../../../assets/assetsMain/bird.png"  className="bird" alt="" />
        <div className="content">
            <h2><br/><span>BagaMundo</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio alias, minima tempora doloremque neque molestias 
                fugiat praesentium cum? Autem doloremque, officia esse nostrum 
                delectus sequi quaerat inventore deleniti quam modi!
            </p>
            <a href="#">Unete</a>
        </div>
        <ul className="sci">
            <li><a href="#"><img src="assets/facebook.png" alt="" /></a></li>
            <li><a href="#"><img src="assets/instagram.png" alt="" /></a></li>
            <li><a href="#"><img src="assets/twitter.png" alt="" /></a></li>
        </ul>

    </section>
);
}
 
export default Index;