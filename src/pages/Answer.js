import { useFunction } from "../context/forum-context";
import {useParams} from "react-router-dom"

export function Answer () {

    const {questionId} = useParams();
    const { forumArray } = useFunction();

    return (
        <div>
            <h1>Answer: </h1>
            <p>{forumArray.find(({id}) => id === Number(questionId)).answer}</p>
        </div>
    )
}