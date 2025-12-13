export function MealSelect({mealCategory}){
    return (
        <div>
            <div className="flex border border-red-950 rounded-md text-center px-5 py-5  w-[85vw]">
                <h3>{mealCategory}</h3>
                <button className="ml-auto bg-white/20 backdrop-blur-md text-white font-semibold py-2 px-4 rounded-lg border border-white/30 hover:bg-white/30 transition ">
                Add
                </button>
            </div>
        </div>
    )
}