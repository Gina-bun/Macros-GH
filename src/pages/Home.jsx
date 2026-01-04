import { MealSelect } from "../components/common/MealSelect";
import { NutrtionSummary } from "../components/layout/NutritionSummary";
import { Utensils } from "lucide-react";


export function Home({
  meals,
  totalCalories,
  breakfastCalories,
  lunchCalories,
  dinnerCalories,
  totalProtein,
  totalCarbs,
  totalFat,
  onDeleteMeal,
}) {


  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-3">
        <Utensils className="w-12 h-12  rounded-md bg-orange-500 p-2" />
        <div className="pl-1">
            <h1 className="font-bold text-3xl text-left">Macros</h1>
            <p className="text-[0.7em]">Track your daily intake</p>
        </div>
        
      </div>

      {/* Nutrition summary banner */}
      <NutrtionSummary
        totalCalories={totalCalories}
        totalProtein={totalProtein}
        totalCarbs={totalCarbs}
        totalFat={totalFat}
      />
      {/* Meal select sectiom */}
      
      
        

      <div className="meal-plan flex flex-col gap-4 py-3 pt-6 m-auto">
        <h3 className="font-bold mb-[-0.5em]">Your meals</h3>
        <MealSelect mealCategory="breakfast"   breakfastCalories={breakfastCalories} meals={meals} onDeleteMeal={onDeleteMeal}/>
        <MealSelect mealCategory="lunch"   lunchCalories={lunchCalories} meals={meals} onDeleteMeal={onDeleteMeal}/>
        <MealSelect mealCategory="dinner" dinnerCalories={dinnerCalories} meals={meals} onDeleteMeal={onDeleteMeal}/>
      </div>
    </div>
  );
}
