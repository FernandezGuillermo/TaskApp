import axios from 'axios';

export const getTasksRequest = async () => 
    await axios.get('http://localhost:3000/tasks')

export const createTaskRequest = async (task) => 
    await axios.post('http://localhost:3000/tasks',task)

export const deleteTaskRequest = async (id) => 
    await axios.delete(`http://localhost:3000/tasks/${id}`)

export const getTaskRequest = async () => 
    await axios.get(`http://localhost:3000/tasks/${id}`)

export const updateTaskRequest = async (id,newFields) =>
    await axios.put(`http://localhost:3000/tasks/${id}`,newFields)

