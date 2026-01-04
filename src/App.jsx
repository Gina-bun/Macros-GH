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
    const existingMeal = meals[mealCategory].some(item => item.name === meal.name)

    if(!existingMeal){
       const newMeal = {
        ...meal,
        quantity: 1,
      }

      
       setMeals((prev) => ({
        ...prev,
        [mealCategory]: [...prev[mealCategory], newMeal]
       }))

 
      console.log(newMeal.quantity)
    }else {
      setMeals((prev) => ({
        ...prev,
        [mealCategory]: prev[mealCategory].map(item => 
          item.name === meal.name
             ? {...item, quantity: item.quantity + 1}
             : item
        ),
      }))
    }
   }

  function displayMealsAfterRemove(){
    setMeals((prev) => ({
      ...prev
    }))
  }

//total calories
const breakfastCalories = meals.breakfast.reduce((total, meal) => total + meal.calories * meal.quantity, 0);
const lunchCalories = meals.lunch.reduce((total, meal) => total + meal.calories * meal.quantity, 0);
const dinnerCalories = meals.dinner.reduce((total, meal) => total + meal.calories * meal.quantity, 0);

const totalCalories = breakfastCalories + lunchCalories + dinnerCalories;

//total macros
//protein
const breakfastProtein = meals.breakfast.reduce((total, meal) => total + meal.protein * meal.quantity, 0);
const lunchProtein = meals.lunch.reduce((total, meal) => total + meal.protein * meal.quantity, 0);
const dinnerProtein = meals.dinner.reduce((total, meal) => total + meal.protein * meal.quantity, 0);

const totalProtein = breakfastProtein + lunchProtein + dinnerProtein

//carbs
const breakfastCarbs = meals.breakfast.reduce((total, meal) => total + meal.carbs * meal.quantity, 0);
const lunchCarbs = meals.lunch.reduce((total, meal) => total + meal.carbs * meal.quantity, 0);
const dinnerCarbs = meals.dinner.reduce((total, meal) => total + meal.carbs * meal.quantity, 0);

const totalCarbs = breakfastCarbs + lunchCarbs + dinnerCarbs

//fats
const breakfastFat = meals.breakfast.reduce((total, meal) => total + meal.fat * meal.quantity, 0);
const lunchFat = meals.lunch.reduce((total, meal) => total + meal.fat * meal.quantity, 0);
const dinnerFat = meals.dinner.reduce((total, meal) => total + meal.fat * meal.quantity, 0);

const totalFat = breakfastFat + lunchFat + dinnerFat

      

  return (
    <>
     <Routes>
      <Route path="/" element={<Home 
        meals={meals}
        totalCalories={totalCalories} 
        breakfastCalories={breakfastCalories}
        lunchCalories={lunchCalories} 
        dinnerCalories={dinnerCalories}
        totalProtein={totalProtein}
        totalCarbs={totalCarbs}
        totalFat={totalFat}
     
        />} />
      <Route path="mealoptions/:mealType" element={<MealOptions onAddMeal={selectedMealToDisplay} onRemoveMeal={displayMealsAfterRemove}/>} />
     </Routes>
    </>
  )
}

export default App
