import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
// import { createContext } from 'react-router-dom';
import { auth } from '../firebase/firebase.init';


// export const AuthContext=createContext();
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [errorMsg,setErrorMsg] = useState('')
    
    // user create function
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user login function

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user sign out function

    const userSignOut=()=>{
        return signOut(auth);
    }

    // User movement monitoring / auth state change

    useEffect(()=>{

         const unSubscribe = onAuthStateChanged (auth,currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
         })
         return ()=>{
            unSubscribe();
         }
    }
   ,[])
    console.log(user);
    const AuthInfo = {
        errorMsg,
        setErrorMsg,
        user,
        setUser,
        createUser,
        userLogin,
        userSignOut,
    }
    return (
        
            <AuthContext.Provider value={AuthInfo} >
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;