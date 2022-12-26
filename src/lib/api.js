const API_KEY = process.env.REACT_APP_API_KEY;
const API_RECIPE_URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}`;
const API_AUTOCOMPLETE_URL = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}`;

export async function getAutoComplete(query) {
  const response = await fetch(
    `${API_AUTOCOMPLETE_URL}&query=${query}&number=5&metaInformation=true`
  );
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const data = await response.json();

  return data;
}
