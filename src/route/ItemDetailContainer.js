import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import ItemList from "../components/ItemListContainer/ItemList.js";



const ItemDetailContainer =() => {
const [item, setItem] =useState({})
const {id}= useParams()

useEffect(() => {
    const getData = new Promise (resolve =>{
        setTimeout(() => {
            resolve(ItemList)
        }, 3000)
    });

    getData.then(res => setItem(res.find((prod)=> prod.id === Number(id))));
},[id])

    return( <div> <ItemDetail item={item}/> <p>Id: {id}</p> <p>Precio:{item.precio}</p> </div>
    )
}

export default ItemDetailContainer;