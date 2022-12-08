import React from 'react';
import { useMealsListContext } from '../providers/MealsProvider';

export default function Counter() {
    const { meals } = useMealsListContext();

  return (
    <div>
        <h3>Numbers of meals you had today: {meals.length}</h3>
    </div>
  )
};
