import React, { createContext, useState } from 'react';
import axios from 'axios';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const applicationId = '3ebb803b';
  const applicationKey = '6ce26bacec1ef4d0e1d9caeaf372a992';

  const addRecipe = async (title, ingredients) => {
    const knownIngredients = [];
    const unknownIngredients = [];
    const allIngredients = ingredients.split('\n');

    for (const ingredient of allIngredients) {
      try {
        // Test if individual ingredient is recognized by the API
        await axios.post(
          `https://api.edamam.com/api/nutrition-details?app_id=${applicationId}&app_key=${applicationKey}`,
          { title, ingr: [ingredient] },
          { headers: { 'Content-Type': 'application/json' } }
        );
        knownIngredients.push(ingredient);
      } catch (error) {
        unknownIngredients.push(ingredient);
      }
    }

    if (unknownIngredients.length > 0) {
      alert(`Unknown ingredients ignored: ${unknownIngredients.join(', ')}`);
    }

    if (knownIngredients.length > 0) {
      try {
        // Fetch nutrition data for known ingredients
        const response = await axios.post(
          `https://api.edamam.com/api/nutrition-details?app_id=${applicationId}&app_key=${applicationKey}`,
          {
            title,
            ingr: knownIngredients,
          },
          { headers: { 'Content-Type': 'application/json' } }
        );

        const nutritionData = response.data;
        const newRecipe = { title, ingredients: allIngredients.join('\n'), nutritionData };
        setRecipes([...recipes, newRecipe]);
      } catch (error) {
        alert('Failed to fetch nutrition data. Please try again later.');
      }
    } else {
      alert('No known ingredients. Recipe not added.');
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
