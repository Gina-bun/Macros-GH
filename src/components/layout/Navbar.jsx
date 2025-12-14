import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <div className="bg-green-900/50 flex gap-3 py-4 justify-center border-t fixed bottom-0 w-full shadow-md">
            <Link to="/">Home</Link>
            <Link to="mealoptions">Meal Options</Link>
        </div>
    )
}