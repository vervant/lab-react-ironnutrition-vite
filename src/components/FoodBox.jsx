import React, { useState } from "react";

const FoodBox = ({ food , deleteFoo }) => {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <div className="food-box">
      <img src={image} alt={name} />
      <div className="food-info">
        <h2>{name}</h2>
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>Total Calories: {totalCalories}</p>
        {/* Add any other food information you want to display */}
      </div>

      <button
        className="delete-btn"
        onClick={() => props.deleteFood(props.food.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default FoodBox;
