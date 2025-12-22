import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Home } from "./pages/Home"
import { MealOptions } from "./pages/MealOptions"
import './App.css'

function App() {

   const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: []
   })

   
   function selectedMealToDisplay(meal, mealCategory){
      const newMeal = {
        ...meal,
        id: crypto.randomUUID(),
      }

      
       setMeals((prev) => ({
        ...prev,
        [mealCategory]: [...prev[mealCategory], newMeal]
       }))

 
      console.log(meals)

   }

  //  function sumCalories(mealCategory){
  //        const total = meals[mealCategory].reduce((acc, meal) => acc + meal.calories, 0);

  //        return total
  //  }
const breakfastCalories = meals.breakfast.reduce((total, meal) => total + meal.calories, 0);
const lunchCalories = meals.lunch.reduce((total, meal) => total + meal.calories, 0);
const dinnerCalories = meals.dinner.reduce((total, meal) => total + meal.calories, 0);

const totalCalories = breakfastCalories + lunchCalories + dinnerCalories;


      



  return (
    <>
     <Routes>
      <Route path="/" element={<Home meals={meals} totalCalories={totalCalories}/>} />
      <Route path="mealoptions/:mealType" element={<MealOptions onAddMeal={selectedMealToDisplay} />} />
     </Routes>
    </>
  )
}

export default App
