import React from 'react';
import Header from './../../header/Head'
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../../gallery/lugares'
const PhotosSet= [

{
	src: '/res/corozo1.jpg',
	width: 4,
	height: 3
},

{
	src: '/res/corozo2.jpg',
	width: 4,
	height: 3
},

]
const Lugar5 = () => {
    return (
		<>
	    <div style={{height:'80px'}}></div >
        <Lugares/>
        <div style={{height:'40px'}}></div >
      	<div >
            <div className="row"style={{margin:'auto'}}>
                <h2 >El Corozo</h2>
                    <h4>
                    Ríos y Cascadas, opciones turísticas que ofrece Chontales
                    </h4>
                    <p>
                    En los municipios de La Libertad y en San Pedro de Lovago, Chontales tiene verdaderas joyas naturales que constituyen un oasis; las cascadas El Corozo y el Salto de Kiloma, son dos de las infinidades opciones turísticas que puede disfrutar los chontaleños y los nicaragüenses que buscan alternativas diferentes al mar.
                    </p>
                    Llegar hasta las Cascadas El Corozo ubicadas en La Libertad, no es nada complicado, pues al llegar a Juigalpa, busca transporte hacia el citado municipio y un taxi puede llevarlo a esta reserva natural que se encuentra del empalme de Betulia 10 kilómetros hacia el norte, en la Finca Las Tres Marías se encuentra en la comarca San Francisco de Gamalote en el caserío Las Praderas.
                    <p>
                    La vertiente hídrica en sí constituye un paraíso terrenal que día y noche emana frescas aguas, que luego recorren por el río formando represas naturales y saltos dónde los turistas la disfrutan al máximo.
                    </p>
                    El lugar aún casi virgen, representa una joya terrenal que en el futuro próximo debe ser conocida y admirada por todos los nicaragüenses, sobre todo por la facilidad de acceso.
                    <p>
                    Las cascadas El Corozo, forman parte de las Tres Marías, cuya propietaria Arlen Calero, ha constituido una alianza con la Alcaldía de La Libertad y el Instituto Nicaragüense de Turismo, a fin de promover sus visitas, pero bajo un modelo de sostenibilidad.
                    <br/>
                    </p>
                </div>

		<div>
			<Gallery photos = {PhotosSet}/>
		</div>
		               
  	</div>
	  </>
    );
};
export default Lugar5