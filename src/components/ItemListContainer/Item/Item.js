import Contador from '../../ItemCount/ItemCount';
import './item.css'
import { NavLink } from "react-router-dom";

const onAdd = (cantidad) => {
    console.log(`${cantidad}`);
}

const Item = (props) =>{
    return(
        <div className='comp'>
            <img src={props.imagen}/>
            <p><NavLink to={'/category/id}'}>{props.nombre}</NavLink></p>
            <p>Precio: {props.precio}</p>
            <Contador initial={0} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default Item