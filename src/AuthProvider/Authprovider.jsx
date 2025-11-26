import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
// import { createContext } from 'react-router-dom';
import { auth } from '../firebase/firebase.init';


// export const AuthContext=createContext();
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const AuthInfo = {
        user,
        setUser,
        createUser
    }
    return (
        
            <AuthContext.Provider value={AuthInfo} >
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;