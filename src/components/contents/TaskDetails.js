import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/todocontext'
import './TaskDetails.css'
const TaskDetails = ({task}) => {
    const {dispatch} = useContext(TodoContext)
    const handleSubmit = (id) =>{
        dispatch({type:"REMOVE_TASK", id })
    }
    return (
      <li className="task_details">
        <div>
          <div className="taskname">{task.title}</div>
          <div className="taskduration">{task.duration}</div>
        </div>
        <div>
            <button className="button" onClick ={()=>{handleSubmit(task.id)}}>Done</button>
        </div>
      </li>
    );
}

export default TaskDetails
