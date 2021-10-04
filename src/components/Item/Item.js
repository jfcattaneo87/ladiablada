import React from 'react';
import './Item.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import ItemCount from '../ItemCount/ItemCount.js'; 
import { Link } from 'react-router-dom'


export const Item = ({ item }) => {
  console.log(item)
  return (
    <Link to={`/itemDetail/${item.id}`}>
      <div className="Item">
        <ItemDetail item={item} />
        <ItemCount stock={5} initial={1}/>
      </div>
      
    </Link>
    
  );
};

export default Item;