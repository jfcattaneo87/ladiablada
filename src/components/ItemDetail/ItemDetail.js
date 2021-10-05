import React from 'react';
import ItemCount from "../ItemCount/ItemCount.js";    
const ItemDetail = ({item}) => {

  return (
    <>
      <div className="Item">
        <div className="item-imagenes">
          {/* <img src={`../assests/imagenes/${item.img}`} alt=''/> */}
          <img src={item.img} alt="" />
        </div>
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <p>{item.description}</p>
      </div>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ItemDetail;