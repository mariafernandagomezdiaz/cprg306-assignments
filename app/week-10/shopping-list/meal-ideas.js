'use client';

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

async function fetchMealDetails(mealId) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals[0];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  };

  const handleMealClick = async (mealId) => {
    if (mealId === selectedMealId) {
      setSelectedMealId(null);  
    } else {
      const mealDetails = await fetchMealDetails(mealId);
      setSelectedMeal(mealDetails);
      setSelectedMealId(mealId);
    }
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="mx-10 my-5">
      <h2 className="text-2xl">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.length === 0 ? (
          <li className="my-2 p-2 border-b border-gray-200">Not Found</li>
        ) : (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <li
                onClick={() => handleMealClick(meal.idMeal)}
                className={`bg-blue-900 text-white p-2 flex flex-col mb-2 cursor-pointer hover:bg-blue-700 transition duration-200 ${meal.idMeal === selectedMealId ? 'selected' : ''}`}
                style={{ width: '350px', marginTop: '10px' }}
              >
                <div>
                  <p className="text-xl font-bold">{meal.strMeal}</p>
                </div>
              </li>
              {meal.idMeal === selectedMealId && selectedMeal && (
                <li className="bg-blue-700 text-white p-2 flex flex-col mb-2" style={{ width: '350px', marginTop: '10px' }}>
                  <h3 className="text-xl font-bold">Ingredients</h3>
                  <ul>
                    {Object.keys(selectedMeal).map((key, index) => {
                      if (key.startsWith('strIngredient') && selectedMeal[key]) {
                        return (
                          <li key={index} className="my-1">
                            {selectedMeal[key]} - {selectedMeal[`strMeasure${key.slice(13)}`]}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </li>
              )}
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
