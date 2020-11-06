import React, { useState, useEffect,useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.css'
import {
    projectFirestore,
} from '../../Firebase/config';
import Head from './../../components/header/Head';
import {Link}from 'react-router-dom'
import {Contexto} from './../../contexto/Context'



const Actividades = (props) => {

    const {listActividades} = useContext(Contexto)
     const {loading} = useContext(Contexto)
     const {getData} =useContext(Contexto)

    // const getData = () => {
    //     projectFirestore
    //     .collection('actividades')
    //     .get()
    //     .then(snapshot => {
    //         const actividades = [];
    //         snapshot.forEach(doc => actividades.push({
    //             id: doc.id,
    //             ...doc.data(),
    //         }));
    //         setListActividades(actividades);
    //         setLoading(false);
    //     })
    //     .catch(error => console.log("Error: ", error));
    // };
  
   useEffect(()=>{
    if(loading) 
    {
        getData();
       
    }   
   },[loading])

    const deleteAct = async(id)=>{
        await projectFirestore.collection("actividades").doc(id).delete();
    }
    
    return ( 
        <>
        <Head/>
        
        {listActividades ?
        listActividades.map ((item) => 
        
        <p key={item.id}>

            <Card className = "cards">
                <Card.Body className = "body">
                    <Card.Title className='titulo' >{item.actividad}</Card.Title>
                    <Card.Img className='imag' variant="top" src={item.fileUrl}/>
                    <Card.Text className='texto'>organizacion:{item.organizacion}</Card.Text>
                    <Card.Text className='texto'>Precio: {item.precio}</Card.Text>

                    <Link to={`/detalle/${item.id}`}>
                        <Button>VER MÁS</Button>
                    </Link>
                    
                    
                    <Link to ={`/form/${item.id}`}>
                        <Button >
                        Actualizar
                        </Button>
                    </Link> 
                    

                    <Button
                        onClick={() => {
                            deleteAct(item.id)
                        }}
                    >
                        Eliminar
                    </Button>

                    
                </Card.Body>
                
        </Card>
       
        </p>)
        :
        'No hay datos'
        
    }
   
        </>
     );
}
 
export default Actividades;