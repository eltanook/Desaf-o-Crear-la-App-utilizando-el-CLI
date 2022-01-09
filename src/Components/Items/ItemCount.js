import {useState} from "react"


const ItemCount = ({stock, initial, onAdd}) => {

    const [contador,setContador] = useState(initial)
    
    const aumentarContador = () =>{
        if (contador < stock){
        setContador(contador + 1)
        }   
    }

    const disminuirContador = () =>{
        if (contador > initial){
        setContador(contador - 1)
        }
    }

    return (
        <div>
            <button onClick={disminuirContador}>-</button>

            <p> {contador} </p>

            <button onClick={aumentarContador}>+</button>

            <button  onClick={() =>onAdd(contador)}>Add to cart</button>
        </div>
    )
}

export default ItemCount
