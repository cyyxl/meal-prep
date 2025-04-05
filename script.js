const recipes = [
  {
    title: "Vegan Rice Bowl",
    ingredients: ["rice", "broccoli"],
    equipment: ["stove"],
    tags: ["vegan", "meal-prep"]
  },
  {
    title: "Baked Chicken & Rice",
    ingredients: ["chicken", "rice"],
    equipment: ["oven"],
    tags: []
  },
  {
    title: "Blended Veggie Soup",
    ingredients: ["broccoli"],
    equipment: ["blender"],
    tags: ["vegan"]
  }
];

function findRecipes() {
  const selectedIngredients = getCheckedValues("ingredient");
  const selectedEquipment = getCheckedValues("equipment");
  const selectedTags = getCheckedValues("diet");

  const matches = recipes.filter(recipe =>
    selectedIngredients.every(i => recipe.ingredients.includes(i)) &&
    selectedEquipment.every(e => recipe.equipment.includes(e)) &&
    selectedTags.every(t => recipe.tags.includes(t))
  );

  const results = document.getElementById("results");
  results.innerHTML = matches.length ? 
    matches.map(r => `<p>${r.title}</p>`).join("") :
    "<p>No recipes found. Try different inputs!</p>";
}

function getCheckedValues(className) {
  return Array.from(document.querySelectorAll(`.${className}:checked`)).map(el => el.value);
}
