export function NutrtionSummary({
    totalCalories,
    breakfastCalories,
    lunchCalories,
    dinnerCalories,
    totalProtein,
    totalCarbs,
    totalFat
}){
    return (
        <>
         <div className="meal-banner grid bg-amber-700/15 py-5 px-5 w-[85vw] h-[40vh] rounded-md m-auto">
            <p>Breakfast: {breakfastCalories}kcal </p>
            <p>Lunch: {lunchCalories}kcal</p>
            <p>Dinner: {dinnerCalories}kcal</p>
            <div>
                <p>Protein: {totalProtein}g</p>
                <p>Carbs:{totalCarbs}g</p>
                <p>Fat:{totalFat}g</p>
            </div>
            <h1 className="text-2xl">Total Calories:{totalCalories}kcal</h1>
         </div>
        </>
    )
}