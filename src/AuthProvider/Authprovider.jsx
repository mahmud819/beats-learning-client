import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
// import { createContext } from 'react-router-dom';
import { auth } from '../firebase/firebase.init';


// export const AuthContext=createContext();
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    
    // user create function
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user login function

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const AuthInfo = {
        user,
        setUser,
        createUser,
        userLogin,
    }
    return (
        
            <AuthContext.Provider value={AuthInfo} >
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;