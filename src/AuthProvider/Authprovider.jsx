import React from 'react';
import { createContext } from 'react-router-dom';


export const Authcontext=createContext();
const Authprovider = ({children}) => {

    
    return (
        <div>
            <Authcontext.Provider>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;