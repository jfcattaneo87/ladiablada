import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css'; 

export const ItemList = ({ items }) => {

  return (
    <div className="item-List">
      {items.map((item) => {
        return( <Item item={item} />)
        })}
    </div>
  );
};
