import './ItemCount.css';
import React,{useState} from "react";
import Button from '@mui/material/Button';


export const ItemCount = ({ stock, initial, onAdd }) => {
    // declaracion de nuestro estado. tiene un nombre declarativo, y un valor inicial igual a initial (1)
    const [contador, setContador] = useState(initial);

    const addOne = () => {
        if (contador < stock) {
          setContador(contador + 1);
        }
      };

      const removeOne = () => {
        if (contador > initial) {
          setContador (contador - 1);
        }
      };

      return (
        // aca un poco de estilo para darle forma
        <div className="container-ItemCount">
            <div className="restar-sumar">
            <Button  ize="small" onClick={removeOne} disabled={contador <= initial}>-</Button>
            {contador}
            <Button size="small" onClick={addOne} disabled={contador >= stock}>+</Button>  
            </div> 
            <div className="button-agregar"><Button>AGREGAR</Button></div>
        </div>
          
        
      );
    };
    





// export default function ItemCount(){

//     const [contador, setContador] = useState(1)
//     const [disableButton, setDisableButton] = useState(false)
    
  
  

    
//     const initial =()=> {
//                 if(contador>'1'){
//                     setContador (contador -1)
//                 }else{
//                     setDisableButton(true)
//                 } 
//             } 
            
//     const onAdd = () => {
//                 if(contador < '5'){
//                     setContador(contador +1)
//                 }else{
//                     setDisableButton(true)
//                 }
//             }

//     return(
//                <div className="restar-sumar">
//                    <button disabled={disableButton} onClick={initial}>-</button>
//                    <h5>{contador}</h5>
//                    <button disabled={disableButton} onClick={onAdd}>+</button>
//               </div> 
                
//             )
//         }       




//     const [cantidad, setCantidad] = useState(1)
//     const [stock, setStock] = useState(5)
//     const [disableButton, setDisableButton] = useState(false)

//     const onAdd = () => {
//         if(cantidad < stock){
//             setCantidad(cantidad +1)
//         }else{
//             setDisableButton(true)
//         }
//     }
//     const restar = () => {
//         setCantidad(!cantidad +1)
//     }


//     return(
//         <div className="restar-sumar">
//             <button onClick={restar}>-</button>
//             {cantidad}
//             <button disabled={disableButton} onClick={onAdd}>+</button>
//         </div>
//     )
// }
