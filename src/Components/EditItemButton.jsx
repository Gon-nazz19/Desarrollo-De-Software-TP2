import React, { useState } from 'react';

function EditItemButton({ item, availableItems, setAvailableItems }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(item.name);
    const [editedQuantity, setEditedQuantity] = useState(item.quantity);
    const [editedDescription, setEditedDescription] = useState(item.description);

    const handleSave = () => {
        const updatedItems = availableItems.map((currentItem) => 
            currentItem === item ? { ...currentItem, name: editedName, quantity: editedQuantity, description: editedDescription } : currentItem
        );
        setAvailableItems(updatedItems);
        setIsEditing(false); 
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input 
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="Nuevo nombre"
                    />
                    <input 
                        type="number"
                        value={editedQuantity}
                        onChange={(e) => setEditedQuantity(e.target.value)}
                        placeholder="Nueva cantidad"
                        min="1"
                        step='1'
                    />
                    <textarea 
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        placeholder="Nueva descripción"
                    />
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <button onClick={() => setIsEditing(true)}>Editar</button>
            )}
        </div>
    );
}

export default EditItemButton;
