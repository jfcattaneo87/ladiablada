import React from 'react';
import './Item.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';

import { Link } from 'react-router-dom'


export const Item = ({ item }) => {
  console.log(item)
  return (
    <Link to={`/itemDetail/${item.id}`}>
      <div className="Item">
        <ItemDetail item={item} />
        
      </div>
      
    </Link>
    
  );
};

export default Item;