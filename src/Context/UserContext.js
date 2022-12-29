import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'




export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState()
    const [loading, setLoading] =useState()
    
   
   
    const createNewUser=(provider)=>{
        setLoading()
        return signInWithPopup(auth, provider)

    
    }

    const userNew =(email, password)=>{
        setLoading()
        return createUserWithEmailAndPassword(auth, email, password )
    }
    const userSignIn = (email, password)=>{
        setLoading()
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const userLogOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return ()=> {unsubscribe()}

    },[])
   

    const authInfo = {user,userLogOut,setUser, createNewUser, userNew, userSignIn}
    return (
        <authContext.Provider value={authInfo}>
            {children}
            
        </authContext.Provider>
    );
};

export default UserContext;