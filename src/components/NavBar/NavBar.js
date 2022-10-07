import LogoCarrito from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom";

const NavBar = ()=> {
    return(
        <nav class="nav">
            <ul>
                <li><NavLink to={'/'} activeClassName='currentCategory' className='text-white'>inicio</NavLink></li>

                <li><NavLink to={'/'} activeClassName='currentCategory' className='text-white'>Articulos</NavLink></li>

                

                
                
            </ul>
            <h1>Entre Hilos y Pinceles</h1>
            <LogoCarrito/>
        </nav>
    )
}
export default NavBar