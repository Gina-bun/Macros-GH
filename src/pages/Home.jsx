import { MealSelect } from "../components/common/MealSelect";
import { Navbar } from "../components/layout/Navbar";
import { NutrtionSummary } from "../components/layout/NutritionSummary";

export function Home() {
  return (
    <div className="grid">
      <h1 className="p-2 font-bold pl-10 text-3xl text-center">Macros</h1>
        {/* Nutrition summary banner */}
       <NutrtionSummary/>
        {/* Meal select sectiom */}
        <div className="meal-plan flex flex-col gap-4 py-3 m-auto">
          <MealSelect mealCategory="breakfast"/>
          <MealSelect mealCategory="lunch" />
          <MealSelect mealCategory="dinner" />
        </div>

        {/* Navbar */}
        <Navbar/>
    </div>
  );
}
