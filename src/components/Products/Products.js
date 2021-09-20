import React from "react";
import ProductoImg from '../../assets/Productos/uno.jpg';
import '../Products/Products.css';


//Class components funcional

const Products = (props) => {
        
    return (
        
                  <div className="container-productos">
                      <div>
                          <img src={ProductoImg} alt=""/>
                      </div>
                      <h3>{props.title}</h3>
                      <p>$ {props.price}</p>
                      <button>Comprar</button>

                  
                  </div>  
        
    );
  }
  
  export default Products;