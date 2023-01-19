import './ItemDetail.css';

import ItemCount from '../itemcount/ItemCount';

const ItemDetail = (props) => {

    return(
        <div>
            <article>
                <p>Nombre: {props.data.title}</p>
                <p>Descripcion: {props.data.descripcion}</p>
                <p>Categoria: {props.data.category}</p>
                <p>Precio: {props.data.price}</p>

                <ItemCount stock ={5}/>
            </article>
        </div>
    )
}

export default ItemDetail