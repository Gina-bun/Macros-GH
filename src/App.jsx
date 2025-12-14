import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { MealOptions } from "./pages/MealOptions"
import './App.css'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="mealoptions/:mealType" element={<MealOptions/>}/>
     </Routes>
    </>
  )
}

export default App
