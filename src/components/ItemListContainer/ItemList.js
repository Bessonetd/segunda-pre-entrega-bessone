import React, { useState }from "react";
import Item from "./Item/Item";

const ItemList = () => {
    const [ItemList, setItemList] = useState([
        { nombre: "Traba puertas ", precio: 100, id: 1, imagen: "https://http2.mlstatic.com/D_NQ_NP_786123-MLA43971845206_112020-O.webp" },
        { nombre: "Cestos", precio: 200, id: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlC7tinD5rmxCEWoLEYrDeiNpDTx-wFh3uqpyRjKhmGZMAFfyeQrAl9jXHmkQyCHkcVU&usqp=CAU" },
        { nombre: "Almohada", precio: 300, id: 3, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiGzJ1Th9M-YI-uMiDDfZtGde57w6R9AazQ&usqp=CAU" },
        { nombre: "Kit Desmaquillante", precio: 400, id: 4, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP5JfPSSO6vktUvzE6CA7KZLdtF6F3m-jBg&usqp=CAU" },
        { nombre: "Maceta", precio: 500, id: 5, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT621qMemth3pNsjYa4-8am0reptHcI73EadL7dsHobCzsnFeV3Mce4hghzC2nvMAv1x10&usqp=CAU" },
        { nombre: "Chiflete Para La Puerta", precio: 600, id: 6, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO7DaZHHs_WvTmfFjZeWtFkU_2eyc58fZu8g&usqp=CAU" },
        { nombre: "Corazones", precio: 700, id: 7, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASmx7hxX9ev-E4JdqtdbgRKOZ_-VxH2fr50rdeLraSo7b0drSKE6kzPjDcZ2aOltZYSc&usqp=CAU" },
        { nombre: "Kit Turbante Y Toalla", precio: 800, id: 8, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSiYCV0mRIwCT0s68Kt8wuBjcJhyP_iJLqQ&usqp=CAU" },
        { nombre: "Caminos", precio: 900, id: 9, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXj96lrkblYe5AwxBgGUwdf8oOnCDgZj59g&usqp=CAU" }
    ]);


    return  (
        <div className="contenedor">
           {ItemList.map((item) => {
            return <Item key={item.id}nombre={item.nombre} imagen={item.imagen} precio={item.precio}/>
           })}
        </div>
    )
}

export default ItemList