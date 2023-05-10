import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host:"localhost",
    user:"root",
    password:"32463929",
    database:"tasksapp"
})

