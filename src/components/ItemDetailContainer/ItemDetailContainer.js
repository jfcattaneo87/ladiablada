import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';


export const ItemDetailContainer = ({items}) => {

  return (
    //This it the parent component, here you need to create a grid to organize your items
    <ItemList items={items} />
  );
};
    
  //   return (
  //     //This it the parent component, here you need to create a grid to organize your items
  //     <ItemList items={items}/>
  //   )
  // };
  
export default ItemDetailContainer;