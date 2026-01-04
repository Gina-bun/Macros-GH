import { Flame } from "lucide-react";
import {Beef} from "lucide-react"
import { Wheat } from "lucide-react";
import { Droplet } from "lucide-react";

export function NutrtionSummary({
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFat,
}) {
  return (
    <div>
      <div className="meal-banner grid bg-[#fcc250]/30 py-5 px-5 w-[85vw] h-fit rounded-md m-auto">
        <div className="total-calories m-auto">
          <div className="flex">
            <Flame />
            <p className="uppercase">total calories</p>
          </div>
          <div className="flex justify-center items-end">
            <h1 className="text-5xl text-center">{totalCalories}</h1>
            <p>kcal</p>
          </div>
        </div>

        <div className="flex macros gap-2 justify-center py-8">
          <div className="bg-orange-400">
            <Beef/>
            <p>{totalProtein}g</p>
            <p>Protein</p>
          </div>

          <div className="bg-yellow-500">
            <Wheat/>
            <p>{totalCarbs}g</p>
            <p>Carbs</p>
          </div>

          <div className="bg-orange-300">
            <Droplet/>
            <p>{totalFat}g</p>
            <p>Fat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
