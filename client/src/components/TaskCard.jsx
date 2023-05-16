import {useTasks} from '../context/TaskProvider'
import { useNavigate } from 'react-router-dom'

function TaskCard({task}) {
    const {deleteTask,toggleTaskDone} = useTasks()
    const navigate = useNavigate();
    const handleDone = async() =>{
        await toggleTaskDone(task.id)
    }

    return (
        <div className='bg-slate-200 rounded-md p-4'>
            <header className='flex justify-between'>
                <h2 className='text-sm font-bold'>{task.title}</h2>
                <span>{task.done === 1 ? "✔" : "❌"}</span>
            </header>
            <p className='text-xs mb-5'>{task.description}</p>
            <span>{task.createAt}</span>
            <div className='flex gap-x-2'> 
                <button className='bg-red-400 px-2 py-1 rounded-md' onClick={()=>deleteTask(task.id)}>Delete</button>
                <button className='bg-slate-400 px-2 py-1 rounded-md' onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
                <button className='bg-green-400 px-2 py-1 rounded-md' onClick={()=>handleDone(task.done)}>
                    Toggle task
                </button>
            </div>
        </div>
    )
}

export default TaskCard