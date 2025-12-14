import {useNavigate, useParams} from "react-router-dom"
import { Navigate } from "react-router-dom"
import { ghanaMeals } from "../data/ghanaMeals"
import { Navbar } from "../components/layout/Navbar"

export function MealOptions(){
    const { mealType }  = useParams()
    const returnHome = useNavigate()

    const filteredMeals = ghanaMeals.filter((meal) => 
        meal.tags.includes(mealType)
    )

    return (
        <div>
            <h1 className="font-bold">Select a {mealType} meal</h1>

            {
                filteredMeals.map((meal) => {
                    return <div key={meal.id}>
                               <h3 >{meal.name}</h3>
                               <p onClick={() => returnHome(-1)}>+</p>
                           </div>
                })
            }
            <Navbar/>
        </div>
    )
}