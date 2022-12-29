import React, { createContext, useState } from 'react';

import {getAuth,  signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config'




export const authContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState()
   
   
    const createNewUser=(provider)=>{
        return signInWithPopup(auth, provider)
    
    }

    const authInfo = {user, createNewUser}
    return (
        <authContext.Provider value={authInfo}>
            {children}
            
        </authContext.Provider>
    );
};

export default UserContext;