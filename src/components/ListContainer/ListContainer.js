import React from "react";
import './ListContainer.css';
import Products from "../Products/Products";
// external components



  export default class ListContainer extends React.Component {
      render(){
          return(
              <div>
                   <Products title="combo 1" price="35.00"/>
              </div>
          )
      }
  }
  