import { createContext } from "react";

const TaskContext = createContext()

export const TaskContextProvider = ({children}) =>{
    return <TaskContext.Provider value={{text:"hello world"}}> 
        {children} 
    </TaskContext.Provider>
}