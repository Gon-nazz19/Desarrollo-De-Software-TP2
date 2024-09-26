import React from 'react';
import AddToCartButton from '../Components/AddToCartButton';
import DeleteItemCart from '../Components/DeleteItemCart';
import TogglePurchasedButton from '../Components/TogglePurchaseButton'
import EditItemButton from '../Components/EditItemButton';

export function Cart({ availableItems, cartItems, setCartItems, setAvailableItems }) {
    
    cartItems = [...cartItems].sort((a, b) => {
        if (a.isPurchased === b.isPurchased) return 0; 
        return a.isPurchased ? 1 : -1; 
    })

    return (
        <div className='Cart'>
            <h1>Carrito de compras</h1>

            <h3>Productos Disponibles</h3>
            <div id='ProdDisp'>
                <ul>
                    {availableItems.length ===0 ? (
                        <p>No ingresó ningún producto</p>
                    ) : 
                        <div>
                            {availableItems.map((item, index) => (
                            <li key={index}>
                                Producto: {item.name}<br/>
                                Cantidad: {item.quantity}<br/>
                                {item.description ? (
                                    <p>Descripción: {item.description}</p>
                                ): ('')}
                                <EditItemButton
                                        item={item}
                                        availableItems={availableItems}
                                        setAvailableItems={setAvailableItems}
                                    />
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
            
            <h3>Productos en el carrito</h3>
            <div>
                {cartItems.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li id='Items-del-carrito'
                                    key={index}
                                    style={{
                                        textDecoration: item.isPurchased ? 'line-through' : 'none', // Aplica el tachado si está comprado
                                        color: item.isPurchased ? 'gray' : 'black' // Opcional: Cambia el color a gris cuando esté comprado
                                        }}
                                >
                                    <TogglePurchasedButton
                                        item={item}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                    />
                                    Producto: {item.name}<br/>
                                    Cantidad: {item.quantity}<br/>
                                    {item.description ? (
                                        <p>{item.description}</p>
                                    ): ('')}
                                    
                                    <DeleteItemCart 
                                        item={item}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

