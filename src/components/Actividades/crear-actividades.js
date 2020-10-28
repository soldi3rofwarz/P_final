import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import './../Actividades/style.css'
import firebase from './../../Firebase/config'


const Listar = ({listar}) => {
    const deleteAct = () => {
        const actividadesRef = firebase.database().ref('actividades').child(listar.id);
        actividadesRef.remove();
      };
    const completeAct = () => {
        const actividadesRef = firebase.database().ref('actividades').child(listar.id);
        actividadesRef.update({
          complete: !listar.complete,
        });
    };


return ( 
    <div>
        <h1></h1>
        <button onClick={deleteAct}>Delete</button>
        <button onClick={completeAct}>Complete</button>



    </div>

//     <Card className = 'cards'>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//         <Card.Title>{listar.}</Card.Title>
//         <Card.Text>
//             Some quick example text to build on the card title and make up the bulk of
//             the card's content.
//         </Card.Text>
//         <Button variant="primary">VER MÁS</Button>
//     </Card.Body>
// </Card>
    
);
}
export default Listar;