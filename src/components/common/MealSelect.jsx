import { useNavigate } from "react-router-dom";

export function MealSelect({ mealCategory,
     meals
    }) {
  const navigate = useNavigate();



  return (
    <div>
      <div className="flex border border-red-950 rounded-md px-5 py-5  w-[85vw]">
        <div>
          <h3>{mealCategory}</h3>
          <div className="flex">
            {
                meals[mealCategory].map((meal) => {
                  return <p key={meal.id}>{meal.name}, </p>
                })
            }
          </div>
        </div>

        <button onClick={ () => navigate(`/mealoptions/${mealCategory}`) } className="ml-auto bg-[#595c56] backdrop-blur-md text-[#f6e3b3] font-semibold py-2 px-4 rounded-lg borders border-[#595c56]/70 hover:bg-[#595c56]/90 transition ">
          Add
        </button>
      </div>
    </div>
  );
}
