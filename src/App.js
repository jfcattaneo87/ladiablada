import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
// import {ItemCount}  from './components/ItemCount/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { list } from './components/ItemListContainer/ItemListContainer.js';
import HomePage from './components/HomePage/HomePage';
import ItemDetail from  './components/ItemDetail/ItemDetail.js'
import Item from  './components/Item/Item.js'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/inicio">
            <HomePage />
          </Route>
          <Route exact path="/category" component={ItemDetailContainer} />
          <Route exact path="/category/:id" component={Item} />
          {/* <Route exact path="/comida/:combos/:id" component={ItemDetail} /> */}
          {/* <Route exact path="/complementos">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/bebidas">
            <ItemDetailContainer/>
          </Route> */}
            {/* <ItemDetail item={item} key={index}/> */}
          {/* </Route> */}
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;




// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* ACA PODRIA IR EL HEADER */}

//       <Switch>
//         {/* ver exact */}
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route exact path="/category/:catId">
//           <Home />
//         </Route>

//         {/* para mostrar algo si la ruta ingresada no matchea con las anteriores */}
//         <Route path="*">
//           {/* para redirigir se usa Redirect, sino pasamos un componente o texto */}
//           <Redirect to="/" />
//         </Route>
//       </Switch>

//       {/* ACA PODRIA IR EL FOOTER */}
//     </BrowserRouter>
//   );
// }
