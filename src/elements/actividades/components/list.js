import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './list.styles.css';
import {Link}from 'react-router-dom';

export const List = (props) => {

    const {
        listActividades,
        onDelete,
    } = props;

    return (
        <>
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
                                    onDelete(item.id)
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
};