import React, {useContext} from "react";
import { TodoContext } from "../../contexts/todocontext";
import TaskDetails from './TaskDetails'
import './TodoList.css'
const TodoList = () => {
  const { tasks } = useContext(TodoContext);
  return tasks.length ? (
    <div className="container">
      {tasks.map((task) => {
        return (
          <ul>
            <TaskDetails key={task.id} task={task} />
          </ul>
        );
      })}
    </div>
  ) : (
    <div className="empty" style={{marginLeft:"45%", padding:"20px"}} > No Tasks </div>
  );
};

export default TodoList;
