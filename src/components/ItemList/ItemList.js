import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css'; 

export const ItemList = ({ items }) => {

  return (
    <div className="item-List">
      {items.map((item, index) => {
        return( 
          <Item key={index} item={item} />)
        })}
    </div>
  );
};

export default ItemList;