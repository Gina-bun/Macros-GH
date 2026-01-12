import { useNavigate } from "react-router-dom";
import { Trash } from "lucide-react";
import { Sunrise } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export function MealSelect({ 
  mealCategory,
   meals, 
   breakfastCalories,
    lunchCalories, 
    dinnerCalories,
    onDeleteMeal
  }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={`flex flex-col border border-red-950 rounded-md px-5 py-5  w-[85vw] ${
          mealCategory === "breakfast"
            ? "breakfast-container"
            : mealCategory === "lunch"
            ? "lunch-container"
            : mealCategory === "dinner"
            ? "dinner-container"
            : ""
        }`}
      >
        <div className="flex justify-between w-full ">
          {mealCategory === "breakfast" ? (
            <div className="mealCategory-title flex gap-1">
                <div className="icon  bg-amber-500/50"><Sunrise className="text-amber-600"/></div>
                <div>
                  <h2 className="capitalize">{mealCategory}</h2>
                  <p>{breakfastCalories} kcal</p>
                </div>
                
            </div>
           
          ) : mealCategory === "lunch" ? (
             <div className="mealCategory-title flex gap-1">
                 <div className="icon bg-red-800/40"><Sun className="text-red-800"/></div>
                <div>
                  <h2 className="capitalize">{mealCategory}</h2>
                  <p>{lunchCalories} kcal</p>
                </div>
            </div>
          ) : (
              <div className="mealCategory-title flex gap-1">
                <div className="icon bg-green-900/50"><Moon className="text-green-900"/></div>
                <div>
                  <h2 className="capitalize">{mealCategory}</h2>
                  <p>{dinnerCalories} kcal</p>
                </div>
            </div>
          )}

          <button
            onClick={() => navigate(`/mealoptions/${mealCategory}`)}
            className="add-icon ml-auto max-h-fit bg-[#595c56] text-2xl backdrop-blur-md text-[#f6e3b3] py-1 px-3 rounded-lg borders border-[#595c56]/70 hover:bg-[#595c56]/90 transition "
          >
            +
          </button>
        </div>

        <div className="grid gap-1.5 pt-3">
          {meals[mealCategory].map((meal) => {
            return (
              <div
                key={meal.id}
                className="flex w-full items-center justify-between bg-white/45 rounded-md py-0.5 px-2"
              >
                <div>
                  <p>{meal.name}</p>
                  <div className="flex gap-0.5 items-center">
                      <p>{meal.calories}kcal</p>
                      <span className="font-bold text-2xl pb-3">.</span>
                      <span>{meal.quantity}x</span>
                  </div>
                  
                </div>
                <button 
                className="trash-icon"
                onClick={() => onDeleteMeal(meal, mealCategory)}
                >
                      <Trash />
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
