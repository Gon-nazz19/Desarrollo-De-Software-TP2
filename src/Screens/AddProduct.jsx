import React, { useState } from 'react';

function AddProduct ({addToAvailableItems}){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            description
        };

        console.log('Nuevo producto:', newItem)
        addToAvailableItems(newItem);
        setName('');
        setPrice('');
        setQuantity('');
        setDescription('');
    }

    return (
      <div className='App-AddProduct'>
        <h2>Agregar un Nuevo Producto</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label><br/>
                <input 
                    type='text'
                    name='nombre'
                    placeholder='Nombre del producto'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cantidad:</label><br/>
                <input 
                    type='number'
                    name='cantidad'
                    placeholder='Cantidad...'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="0"
                    step='1'
                    required
                />
            </div>

            <div>
                <label>Descripción (Opcional):</label><br/>
                <textarea 
                    name='descripcion'
                    placeholder='Pizza con doble peperoni...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type='submit'>Agregar producto a la lista</button>
        </form>
      </div>
    );
  
}

export default AddProduct;