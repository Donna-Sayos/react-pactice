import React, { useState, createContext, useContext } from 'react';

const MealsContext = createContext();

const todaysMeals = [ "Chicken Alfredo Pasta", "Hot coffee w/ cream & sugar", "Tres Leches Cake", "Lots of Water" ];

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {children}
        </MealsContext.Provider>
    )
};

export const useMealsListContext = () => useContext(MealsContext);
export default MealsProvider;