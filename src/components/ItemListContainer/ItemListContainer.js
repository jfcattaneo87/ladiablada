import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
// external components

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      
      const list = [{ id: '001',
                      title: 'combo 1', 
                      price:'1000', 
                      img:'uno.jpg'},
  
                      { id: '002',
                      title: 'combo 2', 
                      price:'2500', 
                      img:'dos.jpg'},
  
                      { id: '003',
                      title: 'combo 3', 
                      price:'3450', 
                      img:'tres.jpg'}
                    ];
  
      
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          
          resolve(list);
        }, 2000);
      });
  
      
      getItems.then((res) => {
        setItems(res);
      });
    }, []);
  
    
    return <ItemList items={items} />;
  };
  