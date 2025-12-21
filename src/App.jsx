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
      //  console.log(meals)
   }




  return (
    <>
     <Routes>
      <Route path="/" element={<Home meals={meals} />} />
      <Route path="mealoptions/:mealType" element={<MealOptions onAddMeal={selectedMealToDisplay}/>} />
     </Routes>
    </>
  )
}

export default App
