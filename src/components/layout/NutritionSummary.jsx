export function NutrtionSummary({totalCalories}){
    return (
        <>
         <div className="meal-banner grid bg-amber-700/15 py-5 px-5 w-[85vw] h-[40vh] rounded-md m-auto">
            <p>Breakfast: </p>
            <p>Lunch:</p>
            <p>Dinner</p>
            <div>
                <p>Protein:</p>
                <p>Carbs:</p>
                <p>Fat:</p>
            </div>
            <h1 className="text-2xl">Total Calories:{totalCalories}</h1>
         </div>
        </>
    )
}