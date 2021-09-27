import React from 'react';
import './Item.css'; 

export const Item = ({ item }) => {
  
  return <div className="Item">
                <div>
                    <img src={`${item.img}`}/>
                </div>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>    
        </div>;
};
