const RecipeCard = (recipe) => {
  const { idMeal, strMeal, strCatagory, strMealThumb } = recipe.recipes;
  console.log(recipe, "asfad");
  return (
    <>
      <div className="card">
        <img src={strMealThumb} alt={strMeal} className="card-image" />
        <div className="card-body">
          <span className="category">{strCatagory}</span>
          <h3>{strMeal}</h3>
          <a href={`https://www.themealdb.com/meal/${idMeal}`} target="_blank">
            Ingredient
          </a>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
