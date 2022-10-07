

const ItemDetail = ( {item}) =>{
    return(
        <div>
            <p> Detalle de : {item.nombre}</p>
            <img src={item.imagen}/>
            <p>{item.precio}</p>
        </div>
    )
};

export default ItemDetail;