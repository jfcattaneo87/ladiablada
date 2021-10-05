import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {list} from '../ItemListContainer/ItemListContainer';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    const getItems = new Promise((res) =>{
      setTimeout(()=>{
        const mockData = list;
        res(mockData)
      }, 2000)

    })
  useEffect(() => {
    getItems.then(res => setItems(res))
  }, );
  
  // const categoryCombo = items.filter((item) => item.category === "combos");
  // const categoryComplementos = items.filter((item) => item.category === "complementos");
  // const categoryBebidas = items.filter((item) => item.category === "bebidas");

  return (
    <div className="">
      {  items.map((item, index) => {
        return (
        <ItemDetail key={index} item={item} />
        )
      })}
    </div>
  );
};

export default ItemDetailContainer;




// Hola! La parte de ItemDetail esta bien, pero la de ItemDetailContainer no.
// ItemDetailContainer deberia ser un componente que adentro resuelva una promise 
// (en un useEffect, filtrando los resultado de tu array por id de UN producto en 
// particular para esta entrega, o directamente que resuelva un objeto que definas. 
// De nuevo, para esta entrega puede estar asi porque es sin navegacion)
// El resultado de esa promise, dentro de ItemDetailContainer, se le pasa a ItemDetail 
// para mostrar los datos (la parte de pasarle props a ItemDetail estaria bien)
// Hace ese cambio y lo apruebo!!
// .---------------------------------------------------------------------------------------
// PD: la parte de navegacion que estoy viendo esta mal. La idea es tener UN 
// contenedor en el cual resolves la promise y devolves los datos filtrados de categoria. Para eso usamos useParams, para no tener que hacer un componente por categoria.
// Por ej:
// 			// se veria en uso como /category/bebidas por ej
//           <Route exact path="/category/:catId">
//             <ItemDetailContainer />
//           </Route>
// Entonces vos con useParams tomarias el valor de catId y con eso filtras. No deberias tener esa logica en App.js

// import React, { useState, useEffect } from 'react';
// import './style.css';

// export default function App() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character')
//       .then((res) => res.json())
//       .then((data) => setCharacters(data.results));
//   }, []);

//   return (
//     <div className="character-container">
//       {characters &&
//         characters.map((character) => {
//           return (
//             <div key={character.id}>
//               <h1>{character.name}</h1>
//               <img src={character.image} alt="character" />
//             </div>
//           );
//         })}
//     </div>
//   );
// }