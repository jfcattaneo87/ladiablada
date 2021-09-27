import React from "react";
import './ItemListContainer.css';
import { ItemList } from './ItemList';
// external components

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      // esta seria su lista de items. deberian tener un titulo o nombre, foto, precio. piensen que son como cards asi que no llevan tantos datos.
  
      // recomiendo poner las fotos en la carpeta "public" en una subcarpeta img o imagenes o assets. asi lo llaman directamente en el src de la imagen ---> <img src="/img/miImagen.jpg" alt="mi foto" />
  
      // entonces de esa forma la ruta de la imagen empieza con una barra siempre, no lleva punto adelante, se pone el nombre de la carpeta y el nombre del archivo.
  
      // si tienen imagenes en src las tienen que importar y es un lio
      const list = [{ id: '001',
                      title: 'combo 1', 
                      price:'1000', 
                      img:'uno.jpg'},
  
                      { id: '002',
                      title: 'combo 2', 
                      price:'2500', 
                      img:'dos.jpg'},
  
                      { id: '003',
                      title: 'combo 3', 
                      price:'3450', 
                      img:'tres.jpg'}
                    ];
  
      // esta es la promise que se resuelve en 2 segundos
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          // hacemos el resolve de nuestro array. no hace falta el reject
          resolve(list);
        }, 2000);
      });
  
      // traemos los datos de nuestra promise y los ponemos en el estado
      getItems.then((res) => {
        setItems(res);
      });
    }, []);
  
    // el contenedor llama al componente presentacion ItemList
    return <ItemList items={items} />;
  };
  