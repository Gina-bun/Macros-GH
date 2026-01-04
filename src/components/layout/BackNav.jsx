import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function BackNav(){
    return (
        <div>
             <Link to="/">
                <button className="font-bold border px-2 py-2 rounded-md">
               
                     <ArrowLeft/>
               
                </button>
             </Link>
        </div>
    )
}