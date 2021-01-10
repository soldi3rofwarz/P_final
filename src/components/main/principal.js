import React ,{useEffect}from 'react';
import './main.css';
import Pie from './../footer/foot';
import Header from './../header/Head'
import {Link} from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import MediaCard from './cards'


const PhotosSet= [

{
	src: `${process.env.PUBLIC_URL}/res/bg3.jpg`,
	width: 3,
	height: 2
},

{
	src: `${process.env.PUBLIC_URL}/res/bg3.jpg`,
	width: 3,
	height: 2
},
{
	src: `${process.env.PUBLIC_URL}/res/bg3.jpg`,
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

    return ( 
        <>
        <Header/>
    <section id="main" className="main"
        onMouseMove={move}
    >
        
        <img src={`${process.env.PUBLIC_URL}/res/bg3.jpg`} alt=""  className="bg"/>
        <img src={`${process.env.PUBLIC_URL}/res/bird2.png`}  className="bird" alt="" />
        <div className="content">
            <h2>VagaChontal</h2>
           
            
                <button className="buton"><Link to = {'/login'} >UNITE</Link></button>
            
 
        </div>
        <ul className="sci">
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/facebook.png`} alt="" /></a></li>
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/twitter.png`} alt="" /></a></li>
            <li><a href="#!"><img src={`${process.env.PUBLIC_URL}/res/instagram.png`} alt="" /></a></li>
        </ul>

    </section>
    <section style={{marginTop:'30px', padding:0, height: 'auto',  height: 'auto'}}>
        <div style={{ boxShadow: '5px 5px', margin: '10px', width: '48%', height: '250px',
                     textAlign: 'center', alignItems:'center', borderRadius: '2%'}} >
            <h2>acerca de</h2>
            <p>es pagina que promueve el turismo al exponer al publico las 
                diferentes actividades que realizan las distinas orgsnixaciones
            </p>
        </div>
           
        <div style={{ boxShadow: '5px 5px',height: '250px',width: '48%', textAlign: 'center',
                      borderRadius: '2%',  }}>
            <h2>mision</h2>
            <p>lfmmamdwdopwqmdqwmdqwdmwqmdwqmdmqwdopmwqdomqwmdopqowqdqd
                dcmdpkmclksmdcklmewfmwefmwemfwemf</p>
        </div>
    </section>
    <section style={{height: 'auto'}}>
      <div style={{width: '100%'}}> <h2>Muestra de galeria</h2></div>
       <div style={{width: '100%'}}>
           <Gallery  photos = {PhotosSet}/> 
           <Link to = {'/actividades'} style={{fontSize: '40px'}} >ver mas</Link>

       </div> 
    </section>
    <section style={{ height: 'auto'}}>
        <div style={{display: 'inline', width:'80%', alignItems: 'center'}}><h2>Actividades recientes</h2>
        <MediaCard/>
        <Link to = {'/galeria'} style={{fontSize: '40px'}} >ver mas</Link>
        </div>
        <div style={{ height: '600px', boxShadow: '-5px 5px', maxWidth: '20%'}}>
            <h2 background='lightblue'>Zoologico Thomas Belt</h2>
            <img src={`${process.env.PUBLIC_URL}/res/zoo.jpg`} />
            <div height='30px'></div>
            <img src={`${process.env.PUBLIC_URL}/res/zoo1.jpg`} width='310px' />
        </div>
        
    </section>
    <Pie/>
    </>
);
}
export default Index;