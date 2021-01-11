import React from 'react'
import {Bar} from 'react-chartjs-2'

const Datos=()=>{
    const Data={
        labels:['2016','2017','2018','2019','2020'],
        datasets:[{
            label: 'actividades en los ultimos 5 años',
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            heverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#ff0c00',
            data:[50,45,60,71,10,0]
        }]
    }
    const Data1={
        labels:['Hato Grande','Peñon del Casique','Piedra de Cuapa','Amerrique','Puerto Diaz'],
        datasets:[{
            label: 'Participantes',
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            heverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#ff0c00',
            data:[30,60,60,46,33,10]
        }]
    }

    const Opciones={
        maintainAspectRatio: false,
        responsive: true
    }

    return(
        <div className='datos' style={{width: '100%', Height: '500px'}}>
            <section style={{height:'50px'}}></section>
            <h1>Graficos</h1>
           <section style={{boxShadow: '5px 5px 5px'}}> <Bar data={Data} options={Opciones}/></section>
           <section style={{boxShadow: '5px 5px 5px'}}> <Bar data={Data1} options={Opciones}/></section>

        </div>
    )
}

export default Datos