import React from 'react';

export const Item = ({ item }) => {
  // aca mostrarian todas las partes del item/producto en cuestion, dandole estilo
  return <div>
                <div>{item.img}
                    <img src={`./assets/img/${item.img}`}/>
                </div>
                <h2>{item.title}</h2>
                <p>${item.price}</p>    
        </div>;
};
