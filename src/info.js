import React from "react";
import images from "./logo192.png"
import "./index.css"

export default function Info(){
     return    ( <div className="info">
        <img src={images} className ="lau" />
         
        <h3>laura smith</h3>
        <p>Front end Developer</p>
        <small>layra@gmail.com</small>
        <br></br>
         <button  className="btn">Emalil</button>
         <button>Emalil</button>
    </div>
    )
    
}