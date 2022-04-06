import React, { useState } from "react";
import { SearchRounded } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import { Button,ButtonBase } from "@mui/material";
import './Search.css'
import { useHistory } from "react-router-dom"

function Search({hideButtons = false}) {
    const[Input , setInput] = useState(" ");
    const history = useHistory();

    const search = (e) =>{
        e.preventDefault();

        //we need to push the history in the function search here
        history.push('/search');
    }

   
    return(

        <form className="searchform">
        <div className="search">
            <div className="searchinput">
                <SearchRounded className="searchicon" />
                <input value={Input} onChange = {e=> setInput(e.target.value)}/>
                <Mic />
            </div>
              {!hideButtons ? (
                <div className="searchbuttons">
                <Button type = 'submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">Feeling lucky</Button>
            </div>
             ) :  <div className="hidebuttons">
             <Button type = 'submit' onClick={search} variant="outlined">Google Search</Button>
             <ButtonBase variant="outlined">Feeling lucky</ButtonBase>
             </div> 
              }

           
            
        </div>
        </form>
    )
}
export default Search;








