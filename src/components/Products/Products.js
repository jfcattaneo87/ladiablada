import React from "react";
import ProductoImg from '../../assets/Productos/uno.jpg'


//Class components funcional

const Products = (props) => {
        
    return (
        
                  <div className="container-productos">
                      <div>
                          <img src={ProductoImg} alt=""/>
                      </div>
                      <h3>Titulo</h3>
                      <p>$ 45.00</p>
                      <button>Comprar</button>

                  
                  </div>  
        
    );
  }
  
  export default Products;