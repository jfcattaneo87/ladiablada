import './ItemCount.css';
import React,{useState} from "react";

//export default function ItemCount({ stock, initial }) {   // desestructuras las props
export default function ItemCount (){

    const [initial, setInitial] = useState(1)
    const [onAdd, setOnAdd] = useState(5)

    const initial = () => setInitial (initial -0);
    const onAdd = () => setOnAdd (onAdd +1);


    return(
               <div className="restar-sumar">
                   <button onClick={initial}>-</button>
                   <button onClick={onAdd}>+</button> 
              </div> 
                
            )
        }




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

