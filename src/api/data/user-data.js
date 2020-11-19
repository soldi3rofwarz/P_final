import firebase from './firebase-config';
import db from './firebase-config'
import 'firebase/auth'

const USER_KEY = 'users';

const queryUser = () =>{
    return db.collection(USER_KEY)
};

export const selectUser = async(userId) => {
    const document = await queryUser().doc(userId).get();

    if(document.exist){
        const user = {
            id:document.id,
            ...document.data(),
        };
        return user;
    }
    else {
        return null;
    }
};
export const currentUser = () =>{
    const user = firebase.auth().currentUser;
    if(user){
        return user;
    }
    else {
        return null;
    }
};

export const onAuthChanged = (response) =>{
    firebase.auth().onAuthStateChanged(response);

};

export const signout = async () => {
    await firebase.auth().signOut();
};

export const signin = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const addUser = async (user) =>{

    const {email, password} = user;
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

    await queryUser().doc(result.user.uid).set({
        email: email,
    });


};