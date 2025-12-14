import {useParams} from "react-router-dom"
import { ghanaMeals } from "../data/ghanaMeals"
import { Navbar } from "../components/layout/Navbar"

export function MealOptions(){
    const { mealType }  = useParams()

    const filteredMeals = ghanaMeals.filter((meal) => 
        meal.tags.includes(mealType)
    )

    return (
        <div>
            <h1 className="font-bold">Select a {mealType} meal</h1>

            {
                filteredMeals.map((meal) => {
                    return <div key={meal.id}>
                               <h3>{meal.name}</h3>
                           </div>
                })
            }
            <Navbar/>
        </div>
    )
}