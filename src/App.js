import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
// import {ItemCount}  from './components/ItemCount/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { list } from './components/ItemListContainer/ItemListContainer.js';
import HomePage from './components/HomePage/HomePage';
import ItemDetail from  './components/ItemDetail/ItemDetail.js'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path="/inicio">
          <HomePage/>
          </Route> 
          <Route exact path="/combos">
            <ItemDetailContainer />
          </Route>
          {/* <Route exact path="/complementos">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/bebidas">
            <ItemDetailContainer/>
          </Route> */}
          <Route exact path="/itemDetail/:id" >
            <ItemDetail/>
          </Route>
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
