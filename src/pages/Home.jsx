import { MealSelect } from "../components/common/MealSelect";
import { Navbar } from "../components/layout/Navbar";
import { NutrtionSummary } from "../components/layout/NutritionSummary";

export function Home({meals,
  activeMealCategory,
   setActiveMealCategory
}) {
  

  return (
    <div className="grid">
      <h1 className="p-2 font-bold pl-10 text-3xl text-center">Macros</h1>
        {/* Nutrition summary banner */}
       <NutrtionSummary/>
        {/* Meal select sectiom */}
        <div className="meal-plan flex flex-col gap-4 py-3 m-auto">
          <MealSelect 
          mealCategory="breakfast"
          meals={meals}
          activeMealCategory={activeMealCategory}
          setActiveMealCategory={setActiveMealCategory}
           />
          <MealSelect 
          mealCategory="lunch" 
          meals={meals}
          activeMealCategory={activeMealCategory}
          setActiveMealCategory={setActiveMealCategory}
          />
          <MealSelect 
          mealCategory="dinner" 
          meals={meals}
          activeMealCategory={activeMealCategory}
          setActiveMealCategory={setActiveMealCategory}
          />
        </div>

        {/* Navbar */}
        <Navbar/>
    </div>
  );
}
