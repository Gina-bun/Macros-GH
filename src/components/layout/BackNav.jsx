import { Link } from "react-router-dom"

export function BackNav(){
    return (
        <div>
             <Link to="/">
                <button className="font-bold border px-3 py-1 rounded-md">
               
                     {`<`}
               
                </button>
             </Link>
        </div>
    )
}