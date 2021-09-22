import React from "react";
import './ListContainer.css';
import Products from "../Products/Products";
// external components

export default function ListContainer(props){
    return(
        <div className="List-container" >
            <Products title="combo 1"price="35"/>
        </div>
    )
}