import axios from 'axios';

export const getTasksRequest = async () => 
    await axios.get('http://localhost:3000/tasks')

export const createTaskRequest = async (task) => 
    await axios.post('http://localhost:3000/tasks',task)

export const deleteTaskRequest = async (id) => 
    await axios.delete('http://localhost:3000/tasks/${id}')

