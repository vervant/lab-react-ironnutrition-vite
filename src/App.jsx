import "./App.css";
import "./components/FoodBox";
import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/* Example usage of FoodBox */}
      {/* <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }}
      />*/}

      <AddFoodForm />

      {foods.map((food) => (
        <div key={food.id}>
          <FoodBox food={food} deleteFood={deleteFood} />
          {/* <button onClick={() => deleteFood(food.id)}>Delete food</button> */}
        </div>
      ))}
    </div>
  );
}

export default App;
