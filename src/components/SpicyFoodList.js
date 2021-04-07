import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [filterBy, setFilterBy] = useState("All");
  const [foods, setFoods] = useState(spicyFoods);
  // console.log(foods)
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    // console.log(newFood)
    const newFoodArray = [...foods, newFood];
    // console.log(newFoodArray)
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      console.log(newFoodArray)
      if (food.id === id) {
        // console.log(food.id)
        // What is line 22 - 27 mean?
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
    console.log(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });
  console.log(foodsToDisplay)
  const foodList = foodsToDisplay.map((food) => (
    
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;