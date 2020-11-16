import {v4 as uuid} from 'uuid'

export const taskreducer =(state, action) =>{
    switch(action.type){
        case "ADD_TASK":
            return [...state, {title:action.task.title, duration:action.task.duration, id:uuid() }]
        case "REMOVE_TASK":
            return state.filter((task)=>task.id !==action.id)
        default:
            return state
    }
}