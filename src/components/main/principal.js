import React ,{useEffect, useCallback}from 'react';
import './main.css';
import Pie from './../footer/foot';
import Header from './../header/Head'
import {Link} from 'react-router-dom'

const Index = () => {

    const move = function(e) {
        const bg = document.querySelector('.bg')
        const bird =document.querySelector('.bird')
        const content = document.querySelector('.content');
        bg.style.width = 100+e.pageX/100+ '%';
        bg.style.height = 100+e.pageX/100+ '%';
    
        bird.style.right = 100+e.pageX/2+ 'px';
        content.style.left = 100+e.pageX/2+ 'px';
    }

    useEffect(()=>{
        document.getElementById('main').addEventListener("mousemove", move);
        return () => document.getElementById('main').removeEventListener('mousemove', move);
    },[]);

    return ( 
        <>
        <Header/>
    <section id="main" className="main"
        onMouseMove={move}
    >
        
       
        
        <img src={`${process.env.PUBLIC_URL}/res/bg.jpg`} alt=""  className="bg"/>
        <img src={`${process.env.PUBLIC_URL}/res/bird.png`}  className="bird" alt="" />
        <div className="content">
            <h2><br/><span>VagaChontal</span></h2>
           
           <Link to = {'/login'}>
            <button>Unete</button>
            </Link>
        </div>
        <ul className="sci">
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/facebook.png`} alt="" /></a></li>
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/twitter.png`} alt="" /></a></li>
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/instagram.png`} alt="" /></a></li>
        </ul>

    </section>

    <Pie/>
    </>
);
}
 
export default Index;