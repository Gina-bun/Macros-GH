import { useNavigate } from "react-router-dom";

export function AddMealsButton() {

   const navigate = useNavigate();
   const handleClick = () => {
       navigate(-1)
   }

  return (
    <>
      <div className="flex justify-center">
        <button onClick={handleClick} className="addMealBtn md:mb-4 bg-amber-600 gap-0.5 mx-4 w-[92vw] justify-center flex items-center z-100 rounded-md fixed bottom-3 py-4">
          Add
         {/* <span > Add 3 items </span> 
          <span className="font-bold text-2xl">·</span> 
          <span > 79 kcal</span> */}
        </button>
      </div>
    </>
  );
}
