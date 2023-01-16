const API_KEY = process.env.REACT_APP_API_KEY;
const API_RECIPE_URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}`;
const API_AUTOCOMPLETE_URL = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}`;
const API_RECIPE_DETAIL_URL = `https://api.spoonacular.com/recipes/`;

export async function getAutoComplete(query) {
  const response = await fetch(
    `${API_AUTOCOMPLETE_URL}&query=${query}&number=5&metaInformation=true`
  );
  if (!response.ok) {
    throw new Error("Could not fetch queries.");
  }

  const data = await response.json();

  return data;
}

export async function getRecipes(pantryItems) {
  const pantryNames = pantryItems.map((ing) => ing.apiJoin);
  const joinedItems = pantryNames.join(",");

  const response = await fetch(
    `${API_RECIPE_URL}&ingredients=${joinedItems}&ignorePantry=true&number=10`
  );
  if (!response.ok) {
    throw new Error("Could not fetch recipes.");
  }

  const data = await response.json();

  return data;
}

export async function getRecipeDetail(recipeId) {
  const response = await fetch(
    `${API_RECIPE_DETAIL_URL}/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false`
  );
  if (!response.ok) {
    throw new Error("Could not fetch recipes.");
  }

  const data = await response.json();
  return data;
}
