import {NavLink} from "react-router-dom";
import "../styles/Home.css"

export function Home () {
    return (
        <div>
            <h1>Welcome User!</h1>
            <NavLink to="/questions">Show questions list</NavLink>
        </div>
    )
}