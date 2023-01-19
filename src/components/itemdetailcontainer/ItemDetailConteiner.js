import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './ItemDetailContainer.css';

import ItemDetail from '../itemdetail/ItemDetail.js';


const ItemDetailContainer = () => {

    const [productosSelect, setProductos] = useState([]);

    const {productoId} = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json()) 
            .then(productos=>setProductos(<ItemDetail key={productos.id} data={productos}/>))

    },[productoId])

    return(
        <div>
            <Link to="/productos">Volver a productos</Link>
            {productosSelect}
        </div>
    )
}

export default ItemDetailContainer