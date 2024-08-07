import { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setRecipes(data.meals);
    setLoading(false);
  };
  console.log(recipes);
  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="contanier">
      <h2>Our Recipe App</h2>
      <div className="recipes">
        {recipes ? (
          recipes.map((recipes) => (
            <RecipeCard key={recipes.idMeal} recipes={recipes} />
          ))
        ) : (
          <div>No Recipes</div>
        )}
      </div>
    </div>
  );
}

export default App;
