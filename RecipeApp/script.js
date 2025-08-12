const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");

// Function to get recipes from the API
const fetchRecipes = async (query) => {
  recipeContainer.innerHTML = "<h2>Feching recipes...<h2>";
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();

  recipeContainer.innerHTML = "";
  response.meals.forEach((meal) => {
    console.log(meal);
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory} </span> Category</p>

    `;

    const button = document.createElement("button");
    button.textContent = "View Recipe";
    recipeDiv.appendChild(button);

    // Adding EventListener to recipe button
    button.addEventListener("click", () => {
      openRecipePopup(meal);
    });

    recipeContainer.appendChild(recipeDiv);
  });
};

// function to fetch ingredients and measurements
const fetchIngredients = (meal) => {
  let ingredientsList = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingredientsList += `<li>${ingredient} - ${measure}</li>`;
    } else {
      break; // Stop if no more ingredients
    }
  }
  return ingredientsList;
  console.log(meal);
};

const openRecipePopup = (meal) => {
  recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3 class="recipeing">Ingredients: </h3>
    <ul class="ingredientList">${fetchIngredients(meal)}</ul>
    <div>
      <h3>Instrctions:</h3>
      <p class="recipeInstructions">${meal.strInstructions}</p>
    </div>
  `;

  recipeDetailsContent.parentElement.style.display = "block";
};

// quita el poppup de recetas
recipeCloseBtn.addEventListener("click", () => {
  recipeDetailsContent.parentElement.style.display = "none";
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
  // console.log("Button Clicked");
});
