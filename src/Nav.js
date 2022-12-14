import React from "react";
import images from "./logo192.png"
import  "./index.css"

export default function Navbar(){
     return    ( <nav>
        <img src={images} className ="rea" />
        <h3>React Logo</h3>
        <h4>React course-Project 1</h4>
        
       
    </nav>
    )
    
}