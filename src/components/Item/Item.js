import React from 'react';
import './Item.css'; 
import imagenes from '../imgenes/uno.jpg';
import imagenes from '../imgenes/dos.jpg';
import imagenes from '../imgenes/tres.jpg';




export const Item = ({ item }) => {
  
  return <div className="Item">
                <div>
                    <img src={imagenes}/>
                </div>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>    
        </div>;
};

//<img src={`../img/uno.jpg${item.img}`}/>