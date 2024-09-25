import React, { useEffect } from 'react';
import AddToCartButton from '../Components/AddToCartButton';

export function Cart({ availableItems, cartItems, setCartItems, setAvailableItems }) {
    
    
    return (
        <div className='Cart'>
            <h1>Carrito de compras</h1>
            <div id='ProdDisp'>
                <h3>Productos Disponibles</h3>
                <ul>
                    {availableItems.length ===0 ? (
                        <p>No ingresó ningún producto</p>
                    ) : 
                        <div>
                            {availableItems.map((item, index) => (
                            <li key={index}>
                                Producto: {item.name}<br/>
                                Cantidad: {item.quantity}<br/>
                                {item.description !== NaN ? (
                                    <p>Descripción: {item.description}</p>
                                ): ({})}
                                <AddToCartButton 
                                    item={item}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}    
                                />
                            </li>
                            ))}
                        </div>
                    }
                    
                </ul>
            </div>
            
            <div>
                <h3>Productos en el carrito</h3>
                {cartItems.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li id='Items-del-carrito'
                                    key={index}>
                                    Producto: {item.name}<br/>
                                    Cantidad: {item.quantity}<br/>
                                    {item.description !== NaN ? (
                                        <p>{item.description}</p>
                                    ): ({})}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

