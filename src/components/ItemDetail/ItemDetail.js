import React from 'react';
import './ItemDetail.css';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount.js';

const ItemDetail = ({item}) => {
    const { comboId } = useParams();
    console.log(comboId);
  return (
    <>
    <Link>
    <div className="Item">
        <div className="item-imagenes">
        <img src={`../imgenes/${item.img}`} alt=''/>
        </div>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.description}</p>    
    </div>
    </Link>
    <ItemCount />
    </>
  );
};

export default ItemDetail;