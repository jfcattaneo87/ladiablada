import React from 'react';
import './Item.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
// import ItemCount from '../ItemCount/ItemCount.js';        
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


export const Item = ({ item }) => {
  const {id} = useParams();

  return (
    <>
    <Link to={`/category/${id}`}>
      <div className="Item">
        <ItemDetail item={item} />
      </div>  
    </Link>
    {/* <ItemCount stock={5} initial={1}/> */}
    </>
  );
};

export default Item;