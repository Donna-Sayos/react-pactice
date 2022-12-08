import React from "react";
import { useMealsListContext } from "../providers/MealsProvider";
import './meal.css';

export default function MealsList() {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h1>Meals List using Context Hook</h1>
      {meals.map((meal, i) => (
        <h2 key={i} className='mealCard' >{meal}</h2>
      ))}
    </div>
  );
}
