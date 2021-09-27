import React from 'react';
import { Item } from './Item';

// ItemList recibe una prop "items" que seria nuestro array de productos
export const ItemList = ({ items }) => {
  // ItemList hace un map para mostrar todos los items recibidos, y para eso llama a "Item" que es el que tiene la info de como se va a mostrar por pantalla el JSX/HTML
  return (
    <div>
      {items.map((item) => {
        return( <Item item={item} />)
        })}
    </div>
  );
};
