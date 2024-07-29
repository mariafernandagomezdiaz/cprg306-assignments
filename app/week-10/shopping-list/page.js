'use client';

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth(); // Access the user object

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      }
    };

    loadItems();
  }, [user]); 

  const handleAddItem = async (newItem) => {
    if (user) {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { id: itemId, ...newItem }]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-blue-950 p-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div className="flex">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
