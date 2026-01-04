import { useParams } from "react-router-dom";
import { BackNav } from "../components/layout/BackNav";
import { ghanaMeals } from "../data/ghanaMeals";
import { Sunrise } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState } from "react";


export function MealOptions({ onAddMeal }) {
  const [counts, setCounts] = useState({})
  const { mealType } = useParams();
  // const navigate = useNavigate();

  const filteredMeals = ghanaMeals.filter((meal) =>
    meal.tags.includes(mealType)
  );

  const amountOfMeals = filteredMeals.length

  function addMealToDisplay(meal) {
    onAddMeal(meal, mealType);
    setCounts((prev) => ({
      ...prev,
      [meal.id]: (prev[meal.id] || 0) + 1
    }))
  }

  function decreaseMealCount(meal){
    setCounts((prev) => {
      const currentCount = prev[meal.id] || 0

     return {
             ...prev,
            [meal.id]: Math.max(0, currentCount - 1),
     }
    })
  }




  return (
    <div className="grid justify-center gap-4 ">
      <div className={`flex items-center gap-4 w-screen bg-amber-600 py-7 px-3 rounded-bl-3xl rounded-br-3xl ${mealType === "breakfast" ? "breakfast-header" : mealType === "lunch" ? "lunch-header" : mealType === "dinner" ? "dinner-header" : ""}`}>
        {/* Back nav button */}
        <BackNav />

        {
        mealType === "breakfast" 
                 ? <div className="flex gap-1.5">
                       <Sunrise/>
                       <h1 className="font-bold text-xl">Add {mealType}</h1>
                  </div> :
        mealType === "lunch"
                 ? <div className="flex gap-1.5">
                       <Sun/>
                       <h1 className="font-bold text-xl">Add {mealType}</h1>
                  </div> : 
                  <div className="flex gap-1.5">
                       <Moon/>
                       <h1 className="font-bold text-xl">Add {mealType}</h1>
                  </div>       
        }

       
      </div>

      <p className="px-3">{amountOfMeals} {mealType} options</p>

      {filteredMeals.map((meal) => {
        return (
          <div
            className="flex mx-3 flex-col gap-4.5 border-[0.2px] border-gray-400 bg-yellow-50 shadow-lg py-5 px-3 rounded-md"
            key={meal.id}
          >
            <div className="flex w-full justify-between">
              <div>
                <h3>{meal.name}</h3>
                <p>{meal.portion}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="bg-gray-300 rounded-2xl px-2">{meal.calories}kcal</span>
              <span>P:{meal.protein}g</span>
              <span>C:{meal.carbs}g</span>
              <span>F:{meal.fat}g</span>
            </div>

            <div className="flex gap-3 text-2xl">
              <button 
              className="decrement text-3xl"
              onClick={() => decreaseMealCount(meal)}
              >
                -
              </button>
              <p className="count">{counts[meal.id] || 0}</p>
              <button 
              className="increment text-3xl"
              onClick={() => addMealToDisplay(meal)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
