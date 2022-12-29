import React, { createContext, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword,  signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config'




export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState()
   
   
    const createNewUser=(provider)=>{
        return signInWithPopup(auth, provider)
    
    }

    const userNew =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password )
    }
    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user, createNewUser, userNew, userSignIn}
    return (
        <authContext.Provider value={authInfo}>
            {children}
            
        </authContext.Provider>
    );
};

export default UserContext;