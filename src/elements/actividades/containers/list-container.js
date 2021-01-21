import React, {useState, useEffect,} from 'react';
import {Delete,GetData,Edit} from './../../../api/data/actividades';
import {List} from './../components/list';


export const ListContainer = () => {
    const [actividades, setActividades] = useState([]);
    

    useEffect(() => {
        GetData()
            .then(actividades => setActividades(actividades) )
           
            .catch(error => console.log("Error:", error))
    }, []);
    return (
        <>
        <List
            listActividades={actividades}
            onDelete={(actividadId) => Delete(actividadId)}
            onEdit={(actividadId)=> Edit(actividadId)}
        />
        </>
    );
};