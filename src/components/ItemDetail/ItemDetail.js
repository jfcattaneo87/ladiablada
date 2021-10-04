import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.js'; 



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
      <ItemCount stock={5} initial={1}/>
    </div>
  );
};

export default ItemDetail;