
import {db,auth} from './firebase-config'
import 'firebase/auth'

const USER_KEY = 'users';

const queryUser = () => {
    return db.collection(USER_KEY);
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
    const user = auth().currentUser;
    if(user){
        return user;
    }
    else{
        return null;
    }
};

export const onAuthChanged = (response) =>{
    auth().onAuthStateChanged(response);
};

export const signout = async () => {
    await auth().signOut();
};

export const signin = async (email, password) => {
    await auth().signInWithEmailAndPassword(email, password);
};

export const addUser = async (user) =>{
    const {email, password} = user;
    const result = await auth().createUserWithEmailAndPassword(email, password);

    await queryUser().doc(result.user.uid).set({
        email: email,
    })
};