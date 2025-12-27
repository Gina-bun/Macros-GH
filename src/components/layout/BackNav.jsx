import { Link } from "react-router-dom"

export function BackNav(){
    return (
        <div>
            <button className="font-bold border px-3 py-1 rounded-md">
                <Link to="/">
                     {`<`}
                </Link>
            </button>
        </div>
    )
}