import React from "react";
import Button from "@material-ui/core/Button";
import '../Products/Products.css';


//Class components funcional

const Products = (props) => {
        
    return (
        
                  <div className="container-productos">
                      <div>
                          <img src="/img/uno.jpg" alt=""/>
                      </div>
                      <h3>{props.title}</h3>
                      <p>$ {props.price}</p>
                      <Button>Comprar</Button>
                     

                  
                  </div>  
        
    );
  }
  
  export default Products;