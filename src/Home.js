import React from "react";
import {Link} from "react-router-dom"
import './Home.css'
import { Avatar } from "@material-ui/core"; 
import Search from "./Search";


function Home () {
return(
  <div className="home">
   <div className="home__header">
       <div className="header_left">
       <Link to ='/about'>About</Link>
       <Link to ='/store'>Store</Link>
    </div>
    <div className="header_right">
        <Link to ='/images'>Images</Link>
        <Link to ='/gmail'>Gmail</Link>
        <Avatar to = '/Account' className="avatar"/>
        
    </div>
    
</div>
<div className="home_body">

    <div>
        <Search  />
    </div>
</div>
</div>
);
}

export default Home;















