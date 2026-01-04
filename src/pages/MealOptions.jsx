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
    <div className="grid justify-center gap-4 ">
      <div className={`flex items-center gap-4 w-screen bg-amber-600 py-7 px-3 rounded-bl-3xl rounded-br-3xl ${mealType === "breakfast" ? "breakfast-header" : mealType === "lunch" ? "lunch-header" : mealType === "dinner" ? "dinner-header" : ""}`}>
        {/* Back nav button */}
        <BackNav />

        <h1 className="font-bold text-xl">Add {mealType}</h1>
      </div>

      {filteredMeals.map((meal) => {
        return (
          <div
            className="flex mx-3 flex-col gap-2 border py-2 px-3 rounded-md"
            key={meal.id}
          >
            <div className="flex w-full justify-between">
              <div>
                <h3>{meal.name}</h3>
                <p>{meal.portion}</p>
              </div>

              <button
                className="font-bold border px-2 py-1 rounded-md max-h-fit"
                onClick={() => addMealToDisplay(meal)}
              >
                Add
              </button>
            </div>

            <div className="flex gap-2">
              <span>{meal.calories}kcal</span>
              <span>P:{meal.protein}g</span>
              <span>C:{meal.carbs}g</span>
              <span>F:{meal.fat}g</span>
            </div>

            <div className="flex">
              <button className="decrement">-</button>
              <p className="count">0</p>
              <button>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
