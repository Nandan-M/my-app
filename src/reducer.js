import { red } from "@mui/material/colors";

//it is an object
export const initialState ={
     term : null
};

export const actionTypes = {
    setSearchTerm : "setSearchTerm"
};

const reducer = (state , action) =>{
    console.log(action);

    switch(action.type){
        case actionTypes.setSearchTerm:
            return{
                ...state,
                term : action.term,
            };

       default:
           return state;
       
    }

}

export default reducer;