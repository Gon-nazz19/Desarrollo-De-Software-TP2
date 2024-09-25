import React from 'react';
import swal from 'sweetalert';

function AddToCartButton({ item, cartItems, setCartItems }) {
    const addToCart = () => {
        // Verificar si el producto ya está en el carrito
        const itemExists = cartItems.some(cartItem => cartItem.name === item.name);
        
        if (itemExists) {
            swal('Este producto ya está en el carrito');
            return; 
        }
        setCartItems([...cartItems, item]);
    };

    return (
        <button onClick={addToCart}>
            Agregar al carrito
        </button>
    );
}

export default AddToCartButton;
