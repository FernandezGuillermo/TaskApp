import {Form,Formik} from 'formik'
import { useTasks } from '../context/TaskProvider.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TaskForm() {

  const {createTask,getTask,updateTask} = useTasks()
  const [task,setTask] = useState({
    title:"",
    description:"",
  })

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    const loadTask = async () =>{
      if(params.id){
      const task = await getTask(params.id)
      setTask({
        title:task.title,
        description:task.description,
      });
      }
    };
    loadTask();
  },[]);

  return (
    <div>
        <Formik  initialValues={task}
          enableReinitialize={true}
          onSubmit={async(values,actions) => {
            console.log(values);
            if(params.id){
              await updateTask(params.id,values);
              navigate("/");
            }else{
              await createTask(values);
            }
            navigate("/");
            setTask({
              title:"",
              description:"",
            });
          }}
          
          >
            {({handleChange,handleSubmit,values,isSubmitting})=>(
                <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto my-20'>
                <h1 className='text-xl font-bold uppercase text-center'>{params.id ? "Edit Task" : "New Task"}</h1>
                <label className='block'>Title</label>
                <input className='px-2 py-1 rounded-sm w-full' type="text" name='title' placeholder='Write a title' onChange={handleChange} value={values.title}/>
    
                <label className='block'>Description</label>
                <textarea className='px-2 py-1 rounded-sm w-full'  name="description" rows="3" placeholder='Write a description' onChange={handleChange} value={values.description}></textarea>
    
                <button type='submit' disabled={isSubmitting} className='block bg-black text-white rounded-md p-2 mt-2 w-full'>
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </Form>
            )}
        </Formik>
    </div>
  )
}

export default TaskForm