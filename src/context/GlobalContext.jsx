import { createContext, useState } from "react"

export let GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    let likedFromLocalStorage = () => {
        return (
            JSON.parse(localStorage.getItem(`likes`)) || []
        )
    }

    let [liked, setLiked] = useState(likedFromLocalStorage());

    return (
        <GlobalContext.Provider value={{ liked, setLiked }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider