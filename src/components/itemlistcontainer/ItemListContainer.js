import './ItemListContainer.css';

import ItemList from '../itemlist/ItemList.js';


const ItemListContainer = (props) => {

    return(

        <div>
            <p>{props.greeting}</p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer