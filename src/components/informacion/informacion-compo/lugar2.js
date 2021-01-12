import React from 'react';
import Header from './../../header/Head'
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../../gallery/lugares'

const PhotosSet= [

{
	src: '/res/amerrique.jpg',
	width: 4,
	height: 3
},

{
	src: '/res/amerrique2.jpg',
	width: 4,
	height: 3
},

]
const Lugar2 = () => {
    return (
		<>
		<div style={{height:'80px'}}></div >
        <Lugares/>
        <div style={{height:'40px'}}></div >
      	<div>
          <div className="row"style={{margin:'auto'}}>
                <h2 >Cordillera Amerrique</h2>
                    <h4>
                    "Lugar del viento" o "donde el viento sopla", llamaron los mayas a esta cordillera
                    </h4>
                    <p>
                        La Reserva Natural de Amerrique es una extensa sierra que determina las condiciones climáticas del departamento de Chontales. Su formación está relacionada a una milenaria actividad volcánica. Antiguamente fue habitada por un aguerrido pueblo, cuyos vestigios están dispersos todo el quebradizo paisaje. Algunas fuentes históricas han relacionado su nombre con el bautizo del continente americano.
                    </p>
                    <p>
                        El área protegida Reserva Natural Serranía de Amerrisque, forma parte de la cordillera de Amerrisque con altas montañas, quebradas, colinas escarpadas, planicies seccionadas y valles encajonados. Se localiza en la región central de Nicaragua y ocupa territorio de seis municipios del país, el municipio de Camoapa del Departamento de Boaco y los municipios de La Libertad, Juigalpa, Comalapa, San Pedro de Lovago y San Francisco de Cuapa en el Departamento de Chontales, con una extensión de 19,194.86 hectáreas.
                    </p>
                    <p>
                    La Reserva Natural Serranía de Amerrisque, fue creada bajo Decreto No. 42-91 del 31 de Octubre de 1991, Declaración de áreas protegidas en varios cerros macizos montañosos, volcanes y lagunas del país
                    </p>
                  
                </div>

		<div>
			<Gallery photos = {PhotosSet}/>
		</div>
		               
  	</div>
	  </>
    );
};
export default Lugar2