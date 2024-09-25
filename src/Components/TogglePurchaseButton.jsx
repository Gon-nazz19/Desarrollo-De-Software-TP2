import React from 'react';

function TogglePurchasedButton({ item, cartItems, setCartItems }) {
    const togglePurchased = () => {

        console.log("Antes de cambiar:", item.name, item.isPurchased ? "Comprado" : "No comprado");

        const updatedItems = cartItems.map((product) =>
            product.name === item.name ? { ...product, isPurchased: !product.isPurchased } : product
        );
        setCartItems(updatedItems);
           // Mostrar la lista actualizada en la consola
           console.log("Después de cambiar:", updatedItems);
    };

    return (
        <button onClick={togglePurchased}>
            {item.isPurchased ? "No comprado" : "Comprado"}
        </button>
    );
}

export default TogglePurchasedButton;