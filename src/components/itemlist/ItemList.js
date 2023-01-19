import { useState, useEffect } from 'react';

import './ItemList.css';

import Item from '../item/Item';

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')  
        .then(res=>res.json())
        .then(json=> setProductos(json.map( productos => <Item key={productos.id} data={productos}/>)   ))

    },[]);

    

    return(
        <div> 
            <p>Item list</p>
            {productos}
        </div>
    )
}

export default ItemList