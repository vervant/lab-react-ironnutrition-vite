// Your code here
import foodsJson from "../foods.json";
import { useState } from "react";
import "../App.jsx";
import crypto from "crypto";

function AddFoodForm({ food, setFoods }) {
  const [foodForm, setFoodForm] = useState([{
    name: "",
    calories: 0,
    image: "",
    servings: 0,
  }]);

  const handleName = (event) => {
    setFoodForm({ ...foodForm, name: event.target.value });
  };
  const handleImage = (event) => {
    setFoodForm({ ...foodForm, image: event.target.value });
  };
  const handleCalories = (event) => {
    setFoodForm({ ...foodForm, calories: event.target.value });
  };
  const handleServings = (event) => {
    setFoodForm({ ...foodForm, servings: event.target.value });
  };


const handleSubmit = (event) => {
  
    const foodForm = {
        id: crypto.randomUUID(),
        name,
        servings,
        calories,
        image,
    }

    // const copy = [...movies]
    // copy.push(newMovie)
    // setMovies(copy)

    setFoodForm([...foodForm,])

    resetFields()
}



  const addFoodForm = () => {
    const newFood = {
      id: crypto.randomUUID(),
      name: foodForm.name,
      calories: foodForm.calories,
      image: foodForm.image,
      servings: foodForm.servings,
    };

    setFoods([...foods, newFood]);
    setFoodForm({
      name: "",
      calories: 0,
      image: "",
      servings: 0,
    });

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          value={foodForm.name}
          onChange={handleName}
          type="text"
          id="name"
        />

        <label htmlFor="image">Image:</label>
        <input
          value={foodForm.image}
          onChange={handleImage}
          type="text"
          id="image"
        />

        <label htmlFor="calories">Calories:</label>
        <input
          value={foodForm.calories}
          onChange={handleCalories}
          type="number"
          id="calories"
        />

        <label htmlFor="servings">Servings:</label>
        <input
          value={foodForm.servings}
          onChange={handleServings}
          type="number"
          id="servings"
        />

        <button onClick={addFoodForm}>Create</button>
      </div>
    </form>
  );
}

export default AddFoodForm;
