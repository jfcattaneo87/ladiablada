import React,{useState} from "react";

export default function ItemCount(props) {
    const [Items, setItems] = useState(0)

    const sumar = () => {
        setItems(items +1)
    }
    const restar = () => {
        setItems(items -1)
    }
    return(
        <div>
            <button onClick={restar}>-</button>
            {Items}
            <button onClick={sumar}>+</button>

        </div>
    )
}