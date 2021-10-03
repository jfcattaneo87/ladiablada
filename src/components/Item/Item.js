import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount.js'; 
import ItemDetail from '../ItemDetail/ItemDetail.js';

export const Item = ({ item }) => {
  return (
    <div className="Item">
      <ItemDetail item={item}/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
};
