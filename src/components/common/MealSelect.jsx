import { useNavigate } from "react-router-dom";
import { Trash } from "lucide-react";

export function MealSelect({ mealCategory, meals }) {
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
          <h2>{mealCategory}</h2>

          <button
            onClick={() => navigate(`/mealoptions/${mealCategory}`)}
            className="ml-auto bg-[#595c56] backdrop-blur-md text-[#f6e3b3] font-semibold py-2 px-4 rounded-lg borders border-[#595c56]/70 hover:bg-[#595c56]/90 transition "
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
                  <p>{meal.calories}kcal</p>
                </div>
                <Trash/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
