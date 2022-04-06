import React from "react";
import { useEffect, useState } from "react";
import API_KEY from "./Keys";
import  SearchPage from "./SearchPage"

const ContextKey = "3f0f04bfa1aa272c0";

const UseGoogleSearch = (term) => {
    const[data , setData] = useState(null);
    
    //use effect is a data layer.
    useEffect(() => {
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ContextKey}&q=${term}`
            )
            .then(response =>
                response.json()
            )  
            .then(result =>{
                setData(result);
            }) 
        }
        fetchData();

    } , [term])
    return {data} // it returns an object i.e search results from the data entered
};

export default UseGoogleSearch