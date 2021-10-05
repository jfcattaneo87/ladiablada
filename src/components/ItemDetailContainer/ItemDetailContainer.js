import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import {list} from '../ItemListContainer/ItemListContainer';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { categria } = useParams();

    // const history = useHistory();

    
    useEffect(() => {
      const getItems = new Promise((res) =>{
        setTimeout(()=>{
          const mockData = list;
          res(mockData)
        }, 2000)
      });
      getItems.then((res) => {
        setItems(res);
      });
      //si hay combos dentro de items filtrea combos que tengan categoria igual
        // categoria ? setItems(res.filter((i) => i.category === categoria)) : setItems(res)})
  },[]);
    // console.log('ITEMS', items)
  // const categories = [
  //   { id: "1", address: "/comida", text: "Comida" },
  //   { id: "2", address: "/comida/combos", text: "Combos" },
  //   { id: "3", address: "/comida/bebidas", text: "Bebidas" },
  //   { id: "4", address: "/comida/complementos", text: "Complementos" },
  // ];
  // const categoryCombo = items.filter((item) => item.category === "combos");
  // const categoryComplementos = items.filter((item) => item.category === "complementos");
  // const categoryBebidas = items.filter((item) => item.category === "bebidas");

  return (
    <>
        {/* {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink to={cat.address} exact activeClassName="activeClass">
              {cat.text}
            </NavLink>
          </div>
        ); */}
        {  items.map((item, index) => {
        return (
          <Link to={item.category}>
            <Item item={item} key={index} />
          </Link>
          
        )
      })}
      
    </>

    // <div className="">
    //   {  items.map((item, index) => {
    //     return (
    //       <Link to={item.category} exact >
    //         <Item key={index} item={item} />
    //       </Link>
          
    //     )
    //   })}
    // </div>
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

// export const Home = () => {
//   /* nuestro estado en donde guardamos los items, como si fuese ItemListContainer */
//   const [items, setItems] = useState([]);

//   /* estado para el loader */
//   const [loader, setLoader] = useState(true);

//   /* aca desestructuramos nuestro parametro que viene por url. el nombre es el mismo que usamos en el path que definimos en App.js */
//   const { catId } = useParams();

//   //hook useHistory para redirigir al usuario despues de algun evento
//   /*   const history = useHistory();

//   const handleClick = () => {
//     history.push('/ALGO');
//   }; */

//   useEffect(() => {
//     /* este setLoader(true) es para hacer que el loader se muestre cuando cambiamos de categoria*/
//     setLoader(true);
//     const getItems = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(data);
//       }, 2000);
//     });

//     getItems
//       .then((res) => {
//         //uso del parametro catId para filtrar nuestros productos7
//         /* si el catId existe, es decir vino por url, hacemos un filtro de nuestros productos que matchean con esa categorias */
//         catId
//           ? setItems(res.filter((i) => i.category === catId))
//           : setItems(res);
//       })
//       .finally(() => setLoader(false));
//   }, [catId]);

//   //uso de categorias en un array para que puedan ser dinamicas en un futuro. ej: traerlas de una base de datos

//   const categories = [
//     { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
//     { id: '123asf', address: '/category/A', text: 'CATEGORIA A' },
//     { id: 'sgs3q3', address: '/category/B', text: 'CATEGORIA B' },
//     { id: 'gkl98s', address: '/category/C', text: 'CATEGORIA C' },
//   ];

//   return (
//     <>
//       {categories.map((cat) => {
//         return (
//           <div className="links" key={cat.id}>
//             <NavLink to={cat.address} exact activeClassName="activeClass">
//               {cat.text}
//             </NavLink>
//           </div>
//         );
//       })}

//       {loader ? (
//         <h1>cargando...</h1>
//       ) : (
//         items?.map((item) => <Item {...item} key={item.id} />)
//       )}

//       {/* <button onClick={handleClick}>IR A ALGUN LADO</button> */}

//       {/* 
//       para evitar hacer esto usamos el {...item}
//       <Item id={item.id} name={item.name} category={item.category} key={item.id}/> */}
//     </>
//   );
// };