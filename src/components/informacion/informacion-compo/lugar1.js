import React from 'react';
import Header from './../../header/Head'
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../../gallery/lugares'

const PhotosSet= [

{
	src: '/res/elnancital.jpg',
	width: 4,
	height: 3
},

{
	src: '/res/elnancital2.jpg',
	width: 4,
	height: 3
},


]
const Lugar1 = () => {
    return (
		<>
		
      	<div style={{top:'100px'}}>
		  
		  <div className="row" >
		  <Lugares/>
                <h2 >El Nancital</h2>
				
                    <h4>
                    	El Nancital un paraíso natural frente a Acoyapa
                    </h4>
                    <p>
                    	La mayoría de sus islas son vírgenes y están deshabitadas. 
                    	Las familias que viven en las más grandes llegaron allí hace muchos años, procedentes de Chontales
                    </p>
                    <p>
                    	El Archipiélago el Nancital, es un bello paraíso conformado por 27 islas con una gran diversidad de flora y fauna, que el visitante nacional y 			   	extranjero disfruta al recorrer el Lago Cocibolca en lancha.
                    </p>
                    <p>
                    	32 kilómetros hay que recorrer en vehículo desde el municipio de Acoyapa Chontales, para disfrutar de esta belleza localizada en el centro de 				Nicaragua.
                    </p>
                    <p>
                    	Durante el recorrido en las aguas frescas y cristalinas del Gran Lago de Nicaragua, se puede apreciar de una imponente vista de los volcanes 				Concepción y Maderas.
                    </p>
                </div>

		<div>
			<Gallery photos = {PhotosSet}/>
		</div>
		               
  	</div>
	  </>
    );
};
export default Lugar1
