import { Link } from 'react-router-dom';

import './Item.css';

import ItemCount from '../itemcount/ItemCount';

const Item = (props) => {

    return(
        <div>
            <p>Nombre: {props.data.title}</p>
            <p>Descripcion: {props.data.descripcion}</p>
            <p>Categoria: {props.data.category}</p>
            <p>Precio: {props.data.price}</p>

            <Link to={`/producto/${props.data.id}`}> Ver detalle</Link>

            <ItemCount stock ={5}/>
        </div>
    )
}

export default Item