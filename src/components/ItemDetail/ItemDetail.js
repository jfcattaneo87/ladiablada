import React from 'react';
import './ItemDetail.css';




const ItemDetail = ({item}) => {

  return (
    <div className="Item">
      <div className="">
        <div className="item-imagenes">
        <img src={`/imgenes/${item.img}`} alt=''/>
        </div>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.description}</p>    
      </div>
      
    </div>
  );
};

export default ItemDetail;