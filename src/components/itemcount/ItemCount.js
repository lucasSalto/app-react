import { useState } from 'react';
import './ItemCount.css';

const ItemCount = (props) => {

    const [count, setCount] = useState(0)

    const addOne = () =>{
        if( count < props.stock){
            setCount(count +1)
        }
    }

    const disOne = () =>{
        if( count > 0){
            setCount(count -1)
        }
    }

    const onAdd = () =>{
        console.log(count)
    }


    return(
        <div>
            <div>
                <button onClick={addOne}>+</button>
                <p>{count} </p>
                <button onClick={disOne}>-</button>
            </div>
            <button onClick={onAdd}>On Add</button>
        </div>
    )
}

export default ItemCount