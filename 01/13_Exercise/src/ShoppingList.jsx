import React from "react";
import { useState } from "react";

const ShoppingList = () => {
  const [item, setItem] = useState([
    { name: "Rice", quantity: 10 + " Kg" },
    { name: "Wheat", quantity: 15 + " Kg" },
    { name: "Meat", quantity: 5 + " Kg" },
  ]);
  const handleClick = () => setItem([...item, { name: "Mango", quantity: 2 + " Kg" }])
  return (
    <div>
      {item.map((e) => (
      <li key={Math.random()}>Item Name: {e.name} , Quantity: {e.quantity}</li>
      ))}
      <button onClick={handleClick}>Add New Item</button>
    </div>
  );
};

export default ShoppingList;
