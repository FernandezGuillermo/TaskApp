import { createContext,useContext,useState } from "react";
import { 
    getTasksRequest,
    deleteTaskRequest,
    createTaskRequest,
    getTaskRequest,
    updateTaskRequest,
    toggleTaskDoneRequest
    } from "../api/tasks.api.js";
import { TaskContext } from "./TaskContext.jsx";

export const useTasks = () =>{
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTasks must be used within a TaskContextProvider")
    }
    return context;
}
export const TaskContextProvider = ({children}) =>{

    async function loadTasks(){
        const response = await getTasksRequest()
        setTasks(response.data)
    }

    const deleteTask = async(id) => {
        try {
            const response = await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.error(error)
        }
    };

    const createTask = async(task) =>{
        try {
            const response = await createTaskRequest(task)
            console.log(response);
            } catch (error) {
            console.error(error);
            }
    }

    const getTask = async(id) =>{
        try {
            const response = await getTaskRequest(id)
            return response.data
        } catch (error) {
            console.log(error);            
        }
    }

    const updateTask = async(id,newField) =>{
        try {
            const response = await updateTaskRequest(id,newField);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const toggleTaskDone = async(id) =>{
try {
    const taskFound = tasks.find((task) => task.id === id);
    await toggleTaskDoneRequest(id,taskFound.done === 0 ? true :false);
    tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 :0 :task.done);
    setTasks([...tasks]);
} catch (error) {
    console.error(error);
}
    }

    const [tasks, setTasks] = useState([])

    return <TaskContext.Provider value={{tasks,loadTasks,deleteTask,createTask,getTask,updateTask,toggleTaskDone}}> 
        {children} 
    </TaskContext.Provider>
}