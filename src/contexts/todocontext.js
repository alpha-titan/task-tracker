
// import {v4 as uuid} from 'uuid'
import {createContext, useEffect, useReducer} from 'react'
import { taskreducer } from "../reducers/taskreducer";

export const TodoContext = createContext() 



const TodoContextProvider = (props)=>{

    const [tasks, dispatch] = useReducer(taskreducer, [], () => {
      const localdata = localStorage.getItem("tasks");
      return localdata ? JSON.parse(localdata) : [];
    });

    useEffect(()=>{localStorage.setItem('tasks', JSON.stringify(tasks))},[tasks])
    return(
        <TodoContext.Provider value = {{tasks , dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;





