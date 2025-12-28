import { useNavigate, useParams } from "react-router-dom";
import { BackNav } from "../components/layout/BackNav";
import { ghanaMeals } from "../data/ghanaMeals";

export function MealOptions({ onAddMeal }) {
  const { mealType } = useParams();
  const navigate = useNavigate();

  const filteredMeals = ghanaMeals.filter((meal) =>
    meal.tags.includes(mealType)
  );

  function addMealToDisplay(meal) {
    onAddMeal(meal, mealType);
    navigate(-1);
  }

  return (
    <div className="py-3 px-10 grid gap-4">
      <div className="flex">
        {/* Back nav button */}
        <BackNav />

        <h1 className="font-bold m-auto">Select a {mealType} meal</h1>
      </div>

      {filteredMeals.map((meal) => {
        return (
          <div className="flex flex-col gap-2 border py-2 px-3 rounded-md" key={meal.id}>
            <div className="flex w-full justify-between">
              <h3>{meal.name}</h3>
              <button
                className="font-bold border px-2 py-1 rounded-md"
                onClick={() => addMealToDisplay(meal)}
              >
                select
              </button>
            </div>
            
            <div className="flex gap-2">
                <span>Calories:{meal.calories}kcal</span>
                <span>protein:{meal.protein}g</span>
                <span>carbs:{meal.carbs}g</span>
                <span>fat:{meal.fat}g</span>
            </div>
            

          </div>
        );
      })}
    </div>
  );
}
