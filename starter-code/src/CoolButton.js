import React, { Component } from "react";

const CoolButton = (props) => {
    return(
     <button className={props.class}>{props.name}</button>
       
    )
}

export default CoolButton