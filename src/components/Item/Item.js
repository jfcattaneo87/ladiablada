import React from 'react';
import './Item.css'; 






export const Item = ({ item }) => {
  
  return <div className="Item">
                <div className="item-imagenes">
                <img src={`../imgenes/${item.img}`}/>
                </div>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>    
        </div>;
};

//<img src={`../imgenes/uno.jpg${item.img}`}/>