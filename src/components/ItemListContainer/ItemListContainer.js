import React from "react";
import './ItemListContainer.css';
import Products from "../Products/Products";
// external components

export default function ItemListContainer(props){
    return(
        <div className="List-container" >
            <Products title="combo 1"price="35"/>
        </div>
    )
}