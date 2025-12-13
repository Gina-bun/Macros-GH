import { ghanaMeals } from "../data/ghanaMeals"
import { Navbar } from "../components/layout/Navbar"

export function MealOptions(){
    return (
        <div>
            <h1>Select a meal</h1>

            {
                ghanaMeals.map((meal) => {
                    return <div key={meal.id}>
                               <h3>{meal.name}</h3>
                           </div>
                })
            }
            <Navbar/>
        </div>
    )
}