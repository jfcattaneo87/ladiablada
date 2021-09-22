import React,{useState} from "react";

export default function ItemCount(props) {
    const [Items, setItems] = useState(0)
    const [Stock, setStock] = useState(5)
    const [disableButton, setDisableButton] = useState(false)

    const onAdd = () => {
        if(Items < Stock){
            setItems(Items +1)
        }else{
            setDisableButton(true)
        }
    }
    const restar = () => {
        setItems(Items -1)
    }

    return(
        <div>
            <button onClick={restar}>-</button>
            {Items}
            <button disabled={disableButton} onClick={onAdd}>+</button>
        </div>
    )
}