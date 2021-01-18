import React from 'react';
import Header from './../../header/Head'
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../../gallery/lugares'
const PhotosSet= [

{
	src: '/res/cuapa1.jpg',
	width: 4,
	height: 3
},

{
	src: '/res/cuapa2.jpg',
	width: 4,
	height: 3
},

]
const Lugar4 = () => {
    return (
		<>
	    <div style={{height:'80px'}}></div >
        <Lugares/>
        <div style={{height:'40px'}}></div >
      	<div >
            <div className="row"style={{margin:'auto'}}>
                <h2 >La Piedra de Cuapa</h2>
                    <h4>
                    El monolito de Cuapa, o “Lugar del Sol”
                    </h4>
                    <p>
                    La Piedra de Cuapa o Monolito de Cuapa es un emblema de la ciudad de San Francisco de Cuapa.Cuenta más de 150 metros de altura, ubicado a cuatro kilómetros del casco urbano y que le da la bienvenida a la ciudad.
                    </p>
                    El municipio de Cuapa no sólo se caracteriza por las supuestas apariciones de la virgen, sino también por un singular monolito de más de 150 metros de altura, ubicado a cuatro kilómetros del casco urbano y que le da la bienvenida a la ciudad.
                    <p>
                    El historiador y filólogo nicaragüense Alejandro Dávila Bolaños relaciona a Cuapa con el monolito, y presume que el significado que da al nombre del municipio es para la piedra, y señala: Cua-pa, coatl: bola brillante, el Sol; pa: lugar. Lugar del Sol. Elevada roca monolítica, situada al norte de Juigalpa y al oriente de Comalapa, y que con seguridad fue usada por los nahuas del lugar para hacer observaciones astronómicas, y en particular estudiar el movimiento del Sol para determinar la fecha del comienzo de la estación lluviosa.
                    </p>

                </div>

		<div>
			<Gallery photos = {PhotosSet}/>
		</div>
		               
  	</div>
	  </>
    );
};
export default Lugar4