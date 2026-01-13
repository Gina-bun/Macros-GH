import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./pages/Home";
import { MealOptions } from "./pages/MealOptions";
import "./App.css";

function App() {
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  function selectedMealToDisplay(meal, mealCategory, count) {
    setMeals((prev) => {
      const existingMeal = prev[mealCategory].find(
        (item) => item.id === meal.id
      );

      if (!existingMeal && count > 0) {
        return {
          ...prev,
          [mealCategory]: [...prev[mealCategory], { ...meal, quantity: 1 }],
        };
      }

      if (existingMeal) {
        return {
          ...prev,
          [mealCategory]: prev[mealCategory]
            .map((item) =>
              item.id === meal.id
                ? { ...item, quantity: Math.max(0, item.quantity + count) }
                : item
            )
            .filter((item) => item.quantity > 0),
        };

        
      }

      return prev;
    });
  }

      console.log(meals);


  //delete meal function
  function deleteMeal(meal, mealCategory) {
    const remainingMeals = meals[mealCategory].filter(
      (item) => item.id !== meal.id
    );

    setMeals((prev) => ({
      ...prev,
      [mealCategory]: remainingMeals,
    }));

    console.log(remainingMeals);
  }

  //total calories
  const breakfastCalories = meals.breakfast.reduce(
    (total, meal) => total + meal.calories * meal.quantity,
    0
  );
  const lunchCalories = meals.lunch.reduce(
    (total, meal) => total + meal.calories * meal.quantity,
    0
  );
  const dinnerCalories = meals.dinner.reduce(
    (total, meal) => total + meal.calories * meal.quantity,
    0
  );

  const totalCalories = breakfastCalories + lunchCalories + dinnerCalories;

  //total macros
  //protein
  const breakfastProtein = meals.breakfast.reduce(
    (total, meal) => total + meal.protein * meal.quantity,
    0
  );
  const lunchProtein = meals.lunch.reduce(
    (total, meal) => total + meal.protein * meal.quantity,
    0
  );
  const dinnerProtein = meals.dinner.reduce(
    (total, meal) => total + meal.protein * meal.quantity,
    0
  );

  const totalProtein = breakfastProtein + lunchProtein + dinnerProtein;

  //carbs
  const breakfastCarbs = meals.breakfast.reduce(
    (total, meal) => total + meal.carbs * meal.quantity,
    0
  );
  const lunchCarbs = meals.lunch.reduce(
    (total, meal) => total + meal.carbs * meal.quantity,
    0
  );
  const dinnerCarbs = meals.dinner.reduce(
    (total, meal) => total + meal.carbs * meal.quantity,
    0
  );

  const totalCarbs = breakfastCarbs + lunchCarbs + dinnerCarbs;

  //fats
  const breakfastFat = meals.breakfast.reduce(
    (total, meal) => total + meal.fat * meal.quantity,
    0
  );
  const lunchFat = meals.lunch.reduce(
    (total, meal) => total + meal.fat * meal.quantity,
    0
  );
  const dinnerFat = meals.dinner.reduce(
    (total, meal) => total + meal.fat * meal.quantity,
    0
  );

  const totalFat = breakfastFat + lunchFat + dinnerFat;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              meals={meals}
              totalCalories={totalCalories}
              breakfastCalories={breakfastCalories}
              lunchCalories={lunchCalories}
              dinnerCalories={dinnerCalories}
              totalProtein={totalProtein}
              totalCarbs={totalCarbs}
              totalFat={totalFat}
              onDeleteMeal={deleteMeal}
            />
          }
        />
        <Route
          path="mealoptions/:mealType"
          element={
            <MealOptions
              onAddMeal={selectedMealToDisplay}
              totalCalories={totalCalories}
              meals={meals}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
