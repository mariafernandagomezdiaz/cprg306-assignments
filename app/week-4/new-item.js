'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();

    let newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(newItem);

    alert(`Added item: ${newItem.name}, quantity ${quantity}, category: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  const handleName = (event) => setName(event.target.value);
  const handleQuantity = (event) => setQuantity(Number(event.target.value));
  const handleCategory = (event) => setCategory(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-blue-300 text-black rounded">
      <div className="flex flex-col space-y-4">
        <div>
          <input type="text" placeholder="Item name" onChange={handleName} value={name} required
            className="w-full px-3 py-2 rounded"
          />
        </div>
        <div className="flex space-x-4">
          <input type="number" value={quantity} min="1" max="99" onChange={handleQuantity} style={{with:'20%'}} required
            className="px-3 py-2 rounded"
          />
          <select onChange={handleCategory} value={category} style={{with:'30%'}}required
            className="px-3 py-2 rounded"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-800 hover:bg-blue-500 text-white py-2 px-4 rounded w-full">
            +
          </button>
        </div>
      </div>
    </form>
  );
}
