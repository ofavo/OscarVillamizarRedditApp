import React, { createContext, useReducer } from 'react';
import { controlReducer } from './controlReducer';

export const ControlContext = createContext();

const initialState = {
    post: [], // Todos los usuarios de la base datos,
    filter: null, 
    navegador: null,
    ruta:null,
    refresh: false,
    reload: false
 
}


export const ControlProvider = ({ children }) => {

    const [ controlState, dispatch ] = useReducer(controlReducer, initialState);

    return (
        <ControlContext.Provider value={{
            controlState,
            dispatch
        }}>
            { children }
        </ControlContext.Provider>
    )
}



