import React from 'react';

function DeleteItemCart({ item, cartItems, setCartItems }) {
    const deleteItem = () => {
        const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
        setCartItems(updatedCart);
    };

    return (
        <button onClick={deleteItem}>
            Eliminar del carrito
        </button>
    );
}

export default DeleteItemCart;