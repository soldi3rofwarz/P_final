import { db } from './firebase-config';

export const COLLECTION_ACTIVIDADES_NAME = 'actividades';

export const actividadesQuery = () => {
    return db.collection(COLLECTION_ACTIVIDADES_NAME);
};

export const GetData = async () => {
    const actividadesSnapshot = await actividadesQuery().get();
    const actividades = [];

    actividadesSnapshot.forEach(doc => actividades.push({
        id: doc.id,
        ...doc.data()
    }));

    return actividades;
};

export const Add = async (actividadData) => {
    await actividadesQuery().add(actividadData);
}

export const Edit = async(actividadId, actividadData) => {
    await actividadesQuery().doc(actividadId).update({
        actividadData
    });
};

export const Delete = async(actividadId) => {
    await actividadesQuery().doc(actividadId).delete();
};