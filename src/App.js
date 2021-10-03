import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './components/NavBar/NavBar';
// import {ItemCount}  from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { list } from './components/ItemListContainer/ItemListContainer.js';


const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 2000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  const categoryCombo = items.filter((item) => item.category === "combos");
  const categoryComplementos = items.filter((item) => item.category === "complementos");
  const categoryBebidas = items.filter((item) => item.category === "bebidas");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/combos">
            <ItemDetailContainer items={categoryCombo} />
          </Route>
          <Route exact path="/complementos">
            <ItemDetailContainer items={categoryComplementos} />
          </Route>
          <Route exact path="/bebidas">
            <ItemDetailContainer items={categoryBebidas} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
