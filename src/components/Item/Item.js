import React from 'react';

export const Item = ({ item }) => {
  
  return <div>
                <div>
                    <img src={`./assets/img/${item.img}`}/>
                </div>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>    
        </div>;
};
