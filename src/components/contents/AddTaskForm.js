import React,{useState,useContext} from 'react'
import { TodoContext } from '../../contexts/todocontext'
import './AddTaskForm.css'
const AddTaskForm = () => {
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')

    const {dispatch} = useContext(TodoContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type:"ADD_TASK", task:{title, duration}})
        setDuration('')
        setTitle('')
    }
    
    return (
      <div className="formcontainer">
        <form className="form_content" onSubmit={handleSubmit}>
          <div className = "form_ins">
            <label style={{ display: "block", margin: "0 auto" }}>
              Task name
            </label>
            <input
              style={{
                display: "block",
                paddingLeft: "3px",
                borderRadius: "4px",
              }}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Task Duration</label>
            <input
              style={{
                display: "block",
                paddingLeft: "3px",
                borderRadius: "4px",
              }}
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <button
              style={{
                margin: "10px auto",
                fontSize: "0.8rem",
                borderRadius: "6px",
                padding: "8px",
                background: "lightgreen",
                border: "none",
              }}
              type="submit"
            >
              {" "}
              Add Task{" "}
            </button>
          </div>
        </form>
      </div>
    );
}

export default AddTaskForm
