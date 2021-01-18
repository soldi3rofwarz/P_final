import React from 'react';
import Header from './../../header/Head'
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../../gallery/lugares'
const PhotosSet= [

{
	src: '/res/garrobogrande.jpg',
	width: 4,
	height: 3
},

{
	src: '/res/garrobogrande2.jpg',
	width: 4,
	height: 3
},

]
const Lugar6 = () => {
    return (
		<>
	    <div style={{height:'80px'}}></div >
        <Lugares/>
        <div style={{height:'40px'}}></div >
      	<div >
            <div className="row"style={{margin:'auto'}}>
                <h2 >Pirámides de Garrobo Grande</h2>
                    <h4>
                    Pirámides de Garrobo Grande: Atractivo Natural e Histórico de Chontales
                    </h4>
                    <p>
                    El Departamento de Chontales cuenta con numerosos atractivos naturales, arqueológicos e históricos, prueba de ello son las Pirámides de Garrobo Grande.
                    </p>
                    Las Pirámides de Garrobo Grande están ubicadas en la Comarca la Gateada en el Municipio de Villa Sandino, siendo descubiertas en el siglo XIX por campesinos en busca de tierras para sembrar.
                    <p>
                    Según estudios arqueológicos de expertos nicaragüenses, la mayor parte de la pirámides están bajo tierra y se calculan que podrían ser incluso más antiguas que las pirámides mayas de México o que las ruinas de Machu Picchu en Perú, construidas hace miles de años.
                    </p>
                    Las pirámides fueron investigadas en la década de los 60, las cuales constan de 4 estructuras piramidales, la mayor de ellas mide 40 metros de largo por 20 de ancho y 8 metros de altura con 3 escalones. Estas estructuras sobrepasan los 4,000 años por lo que forman parte de las estructuras piramidales mas antiguas del continente.
                    <p>
                    La primera referencia de la existencia de este tesoro arqueológico esta registrado en un mapa que ejecutó un señor de apellido Ferrer en el año 1853, se dice que el puso un rotulo en el mapa con el nombre de Fuinas Antiguas porque estaban intactas pero a principio del siglo le empezaron a hacer hoyos buscando Tesoros.
                    </p>
                    Si usted creía que en Nicaragua no habían pirámides, lo invitamos a que venga a conocer Chontales y las Pirámides de Garrobo Grande.
                   
                </div>

		<div>
			<Gallery photos = {PhotosSet}/>
		</div>
		               
  	</div>
	  </>
    );
};
export default Lugar6