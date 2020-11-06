import React ,{useState,createContext}from 'react';
import {
    projectFirestore,
} from './../Firebase/config';

export const Contexto = createContext()

export default (props) => {
    const [listActividades, setListActividades] = useState();
    const [loading, setLoading] = useState(true);

    const getData = () => {
        setLoading(true);
        projectFirestore
        .collection('actividades')
        .get()
        .then(snapshot => {
            const actividades = [];
            snapshot.forEach(doc => actividades.push({
                id: doc.id,
                ...doc.data(),
            }));
            setListActividades(actividades);
            setLoading(false);
        })
        .catch(error => console.log("Error: ", error));
    };


    return ( 
    <>
        <Contexto.Provider value={{
            getData,
            listActividades,
            loading,
        }}>
        
            {props.children}

        </Contexto.Provider>
    </> 
    );
}