import { useContext, useState, createContext, useEffect } from "react"
import { fakeFetch } from "../data/forumDB";

export const FunctionContext = createContext();

export function FunctionProvider ({children}) {

    const [forumArray, setForumArray] = useState([]);

    const getForumData = async () => {
        try {
            const {status, data: {questions}} = await fakeFetch("https://example.com/api/questions");
            if (status === 200) {
                setForumArray(questions);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => getForumData, []);

    return (<FunctionContext.Provider value={{forumArray}}>
        {children}
    </FunctionContext.Provider>)
}

export const useFunction = () => useContext(FunctionContext);