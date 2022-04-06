import { render } from "@testing-library/react";
import React,{useContext , useReducer, createContext} from "react";


// preparing data layer
export const StateContext = createContext();

export const StateProvide = ({reducer , initialState , children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children} 
        
    </StateContext.Provider>
);
// children is refering to the app.js here *

export const useStateValue = () => useContext(StateContext);
//this is a hook which allows us to pull the information from data layer