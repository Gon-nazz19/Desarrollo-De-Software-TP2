import '../App.css';
import React from 'react';
import {Link} from 'react-router-dom'

export function NavBar() {
    return(
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/AddProduct'>Agregar Producto</Link>
                </li>
                <li>
                    <Link to='/Cart'>Carrito</Link>
                </li>
            </ul>
        </nav>
    )
}