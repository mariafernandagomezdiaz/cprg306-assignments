'use client';

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else if (sortBy === 'category') {
      let categoryA = a.category.toUpperCase();
      let categoryB = b.category.toUpperCase();
      if (categoryA < categoryB) {
        return -1;
      }
      if (categoryA > categoryB) {
        return 1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <div>
      <section className="flex mb-5 px-10 py-5 bg-blue-300 text-slate-900">
        <div className="flex-1">
          <button
            onClick={() => handleSort('name')} 
            className={`px-4 py-2 ${sortBy === "name" ? "bg-blue-600" : "bg-blue-400"} text-white rounded`}
          >
            Sort by Name
          </button>
        </div>
        <div className="flex-1">
          <button
            onClick={() => handleSort('category')} 
            className={`px-4 py-2 ${sortBy === "category" ? "bg-blue-600" : "bg-blue-400"} text-white rounded`}
          >
            Sort by Category
          </button>
        </div>
      </section>
      <section>
        {sortedItems.map((item) => (
          <div key={item.id}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
