// import React from "react";
// import { useState } from "react";

// const ShoppingList = () => {
//   const [item, setItem] = useState([
//     { name: "Rice", quantity: 10 + " Kg" },
//     { name: "Wheat", quantity: 15 + " Kg" },
//     { name: "Meat", quantity: 5 + " Kg" },
//   ]);
//   const handleClick = () => setItem([...item, { name: "Mango", quantity: 2 + " Kg" }])
//   return (
//     <div>
//       {item.map((e) => (
//       <li key={Math.random()}>Item Name: {e.name} , Quantity: {e.quantity}</li>
//       ))}
//       <button onClick={handleClick}>Add New Item</button>
//     </div>
//   );
// };

// export default ShoppingList;

import React, { useState } from 'react'

const ShoppingList = () => {
  const [items, setItems] = useState([]) 
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault() // This prevents the default form submission behavior, which would reload the page.
    if(!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    }
    setItems((prevItems) => [...prevItems, newItem])
    setName('')
    setQuantity('')
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Item Name' value={name} onChange={e => setName(e.target.value)} />
        <input type="number" placeholder='Quantity' value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button type='submit'>Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>Item Name: {item.name}, Quantity: {item.quantity}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
