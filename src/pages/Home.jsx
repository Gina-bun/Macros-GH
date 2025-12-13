import { MealSelect } from "../components/common/MealSelect";
import { Navbar } from "../components/layout/Navbar";

export function Home() {
  return (
    <div className="grid">
      <h1 className="p-2 font-bold pl-10">Macros</h1>
      <div className="meal-banner grid border py-5 px-5 w-[85vw] h-[40vh] rounded-md m-auto">
      
      </div>
        <div className="meal-plan flex flex-col gap-4 py-3 m-auto">
          <MealSelect mealCategory="Breakfast"/>
          <MealSelect mealCategory="Lunch" />
          <MealSelect mealCategory="Dinner" />
        </div>

        {/* Navbar */}
        <Navbar/>
    </div>
  );
}
