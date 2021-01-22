import React ,{useEffect}from 'react';
import './main.css';
import Pie from './../footer/foot';
import Header from './../header/Head'
import {Link} from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import MediaCard from './cards'


const PhotosSet= [

{
	src: `${process.env.PUBLIC_URL}/res/puertodiaz.jpg`,
	width: 3,
	height: 2
},

{
	src: `${process.env.PUBLIC_URL}/res/cuapa2.jpg`,
	width: 3,
	height: 2
},
{
	src: `${process.env.PUBLIC_URL}/res/elnancital2.jpg`,
	width: 3,
	height: 2
},

]

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
    return(
      <>
      <section id="main" className="main"
        onMouseMove={move}
    >

        <img src={`${process.env.PUBLIC_URL}/res/bg3.jpg`} alt=""  className="bg"/>
        <img src={`${process.env.PUBLIC_URL}/res/bird2.png`}  className="bird" alt="" />
        <div className="content">
            <h2>VagaChontal</h2>


                <button className="buton"><Link to = {'/loginGoogle'} style={{textDecoration:'none', color:'white'}}>UNITE</Link></button>


        </div>
        <ul className="sci">
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/facebook.png`} alt="" /></a></li>
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/twitter.png`} alt="" /></a></li>
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/instagram.png`} alt="" /></a></li>
        </ul>

    </section>
    <section style={{marginTop:'30px', padding:0, height: 'auto',  height: 'auto'}}>
        <div style={{ boxShadow: '5px 5px 5px ', margin: '10px', width: '48%', height: '250px',
                     textAlign: 'center', alignItems:'center', borderRadius: '2%'}} >
            <h2 style={{color: '#black'}}>Misión </h2>
            <p>Dar a conocer el turismo chontaleño, al exponer al público las 
                diferentes actividades que realizan las distinas organizaciones.
            </p>
            <img src={`${process.env.PUBLIC_URL}/res/about.png`} width='100px' />

        </div>

        <div style={{ boxShadow: '5px 5px 5px',height: '250px',width: '48%', textAlign: 'center',
                      borderRadius: '2%',  }}>
            <h2 style={{color: '#black'}}>Visión</h2>
            <p>Ser conocidos a nivel internacional 
            </p>
            <img src={`${process.env.PUBLIC_URL}/res/mision.png`} width='100px' />

        </div>
    </section>
    <section style={{height: 'auto'}}>
      <div style={{width: '100%'}}> <h2>Muestra de galería</h2></div>
       <div style={{width: '100%'}}>
           <Gallery  photos = {PhotosSet}/> 
           <Link to = {'/galeria'} style={{fontSize: '40px'}} >Ver más</Link>

       </div> 
    </section>
    <section style={{ height: 'auto', width: '100%', margin:'auto'}}>
        <div style={{display: 'row', width:'100%'}}>
            <h2>Actividades recientes</h2>
           
            <Link to = {'/actividades'} style={{fontSize: '40px'}} >ver mas</Link>
        </div>
        <div style={{ height: '600px', boxShadow: '-5px 5px 5px', maxWidth: '30%', overflow:'hidden', backgroundColor: '#DBFADB', right:'0px'}}>
            <h2 background='lightblue'>Zoologico Thomas Belt</h2>
            <img style={{width:'250px', backgroundAttachment: 'fix'}} src={`${process.env.PUBLIC_URL}/res/zoo.jpg`} />
            <hr/>
            <img  style={{width:'250px', backgroundAttachment: 'fix'}} src={`${process.env.PUBLIC_URL}/res/zoo1.jpg`} width='310px' />
            <h2>Visitenos</h2>
            <h3>horario de atencion</h3>
            <p>de martes a domingo <br/> de las 8:00 a.m a 5:00 p.m</p>
        </div>


    </section>

    </>
);
    
}
export default Index