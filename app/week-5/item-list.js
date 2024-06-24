"use client"

import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = (items, sortBy) => {
    return items.slice().sort((a, b) => {
      if (isNaN(parseInt(a[sortBy]))) {
        // Ordenar alfabéticamente
        let nameA = a[sortBy].toUpperCase();
        let nameB = b[sortBy].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        // Ordenar por id
        return a.id - b.id;
      }
    });
  };

  const sortedItems = sortItems(items, sortBy);

  const handleSortByName = () => setSortBy("name");
  const handleSortByCategory = () => setSortBy("category");

  return (
    <div>
      <section className="flex mb-5 px-10 py-5 bg-blue-300 text-slate-900">
        <div className="flex-1">
          <button
            onClick={handleSortByName}
            className={`px-4 py-2 ${sortBy === "name" ? "bg-blue-600" : "bg-blue-400"} text-white rounded`}
          >
            Sort by Name
          </button>
        </div>
        <div className="flex-1">
          <button
            onClick={handleSortByCategory}
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
            />
          </div>
        ))}
      </section>
    </div>
  );
}
