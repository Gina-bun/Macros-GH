import { useNavigate, useParams} from "react-router-dom"
import { ghanaMeals } from "../data/ghanaMeals"
import { Navbar } from "../components/layout/Navbar"

export function MealOptions({onAddMeal}){
   const { mealType }  = useParams()
    const navigate = useNavigate()

 
    const filteredMeals = ghanaMeals.filter((meal) => 
        meal.tags.includes(mealType)
    )

    function addMealToDisplay(meal){
        onAddMeal(meal, mealType);
        navigate(-1)
    }
  
    return (
        <div>
            <h1 className="font-bold">Select a {mealType} meal</h1>

            {
                filteredMeals.map((meal) => {
                    return <div className="flex gap-2" key={meal.id}>
                               <h3 >{meal.name}</h3>
                               <button className="font-bold border px-2 rounded-md" onClick={() => addMealToDisplay(meal, mealType)}>+</button>
                           </div>
                })
            }

        
            <Navbar/>
        </div>
    )
}