import { useFunction } from "../context/forum-context";
import { NavLink } from "react-router-dom";
import "../styles/Questions.css"

export function Questions () {

    const { forumArray } = useFunction();

    return (
        <div>
            <ul>
            {
                forumArray.map(({id, question, answer}) => <li key={id}>
                    <h2>{question}</h2>
                    <span><NavLink class="navLink" to="/questions">upvote</NavLink></span>
                    <span><NavLink class="navLink" to="/questions">downvote</NavLink></span>
                    <span><NavLink class="navLink" to={`/answer/${id}`}>answer</NavLink></span>
                </li>)
            }
            </ul>
        </div>
    )
}