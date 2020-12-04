import React from 'react';
import {Layout} from './../../../elements/theme/components/layout';
import './informacion.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const Lugar1 = (props) => {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
    setSpacing(Number(event.target.value));}
    
    return (
        <>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
   
          </Grid>
            <div class="row">
              <div/>
                <h2>Reserva Natural Sierra Amerrique</h2>
                        <p>
                        La cordillera de Amerrique es un majestuoso monumento de la naturaleza 
                        que forma el Área protegida “Reserva Natural Sierra Amerrique”, 
                        con una extensión aproximada de 12,073 hectáreas. La cordillera 
                        es visible desde el mirador de Palo Solo en Juigalpa y, a pesar de la 
                        distancia, es fácil sentirse cautivado por la belleza del paisaje. 
                        Lo más llamativo de esta reserva son sus picos rocosos que sobresalen 
                        de improvisto, sus farallones cortados a pique y su ambiente cargado 
                        de historia.
                        </p>

                        <p>
                        ¿Cómo llegar? 
                        </p>

                        <p>
                        Si va en vehículo particular, en Managua debe tomar la carretera a Juigalpa. La entrada a la ciudad queda en el Km. 138, pero debe seguir hasta llegar al Km. 145, en donde queda, a mano izquierda, el empalme “El Lajero”, debe tomar este camino de tierra en regular estado y seguirlo por 5.57  kilómetros hasta llegar a la comunidad “Poza larga”. Una vez ahí, pregunte por el camino a la “Quinta Regina”, que es una hacienda ubicada al pie de la peña de Amerrique. Desde la comarca Poza Larga, hasta la Quinta Regina hay 3.2 kilómetros; en el camino se pasan diversas “puertas de alambre”, las que hay que ir abriendo y cerrando, sin abandonar el camino principal, también se pasan algunos portones metálicos, incluyendo el de la finca El Caracol.
                        Una vez en la Quinta Regina, para subir hasta la cumbre de la peña hay que caminar 2.5 kilómetros; eso sí, son muy difíciles de vencer si no se está en buena forma física, pero cuando se llega al borde del abismo, la vista es reconfortante. La Quinta está a unos 448 msnm y el borde del acantilado a unos 740 msnm, aproximadamente.
                        </p>

                        <p>
                        Nos encontramos, antes de llegar a la Quinta Regina, una manada de monos cara blanca (Cebus capucinus), apenas pudimos distinguir unos cinco ejemplares que se nos perdieron rápidamente entre las ramas altas. Igualmente, cerca del acantilado nos encontramos un grupo de monos araña (Ateles geoffroyi), que se balanceaban con sus largos brazos, pero no pudimos apreciarlos bien por lo espeso de la vegetación y lo incómodo del terreno. Nuestros acompañantes, campesinos y trabajadores de la zona, nos dijeron que aún hay algunos felinos en la zona; por lo que la observación de fauna es otro atractivo potencial.
                        </p>

                        <p>
                        El camino que va del empalme El Lajero a la comunidad Poza Larga es apto sólo para vehículos 4x4; y el camino desde esta comunidad hasta la Quinta Regina se deteriora en invierno. Le recomendamos que antes de viajar pregunte a los contactos sobre el estado del terreno, ya que en la zona hay muchas haciendas grandes y a veces hay entrada aún en invierno.
                        </p>

                        <p>
                        Si por el contrario, desea viajar en el transporte público hasta donde pueda, le damos las señas. Primero, tiene que tomar en Managua un bus hacia Juigalpa, en el mercado El Mayoreo; al momento del viaje (mayo, 2012) el pasaje costaba C$ 50 (USD 2.15 aproximadamente).
                        </p>

                        <p>
                        En Juigalpa tiene que esperar en el mercado viejo (a dos cuadras al este del parque central) un camioncito de barandas de madera que sale a las 6:30 de la mañana y 3:30 de la tarde hacia la comarca Poza Larga. En el mercado debe preguntar por el “camioncito lechero que viaja a Poza Larga”. Aunque en realidad, este vehículo sale de la casa del propietario y se llega a esperar pasajeros al mercado, por lo que debe estar muy atento e informarse con las personas ahí en el mercado. Tarda en llegar 45 minutos a la comarca y sólo se queda unos pocos minutos para regresar a Juigalpa; el pasaje cuesta C$ 15.
                        </p>

                        <p>
                        Una vez que llega a la comunidad Poza Larga debe disponerse a caminar los 3.2 kilómetros sin abandonar el camino principal, pasando por 3 “puertas de alambre” y 2 portones metálicos, hasta llegar a la Quinta Regina.  Ya sea que se vaya en vehículo o a pie, siga siempre nuestra recomendación de preguntar (y agradecer) gentilmente a los pobladores por la ruta a seguir.
                        </p>

                        <p>
                        Para subir el acantilado debe contratar un guía, 
                        que le puede costar un mínimo de C$ 200. 
                        Si desea otros servicios, como alimentación y permiso 
                        para acampar o pernoctar en la finca, debe llamar al menos un día antes.
                        </p>
                </div>               
            </Grid>
        </>
    );
}; 