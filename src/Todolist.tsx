import React from "react";
import {TaskType} from "./App"
import TodoListHeader from "./TodoListHeader";
import ButtonPropsType from "./ButtonPropsType";
import TaskList from "./TaskList";
type List ={
    title: string;
    tasks:Array<TaskType>;
}

const Todolist = (props: List) =>{
    return(
    <div>
       <TodoListHeader title={props.title}/>
        <div>
            <input/>
            <button>+</button>
        </div>
        <TaskList tasks ={props.tasks}/>
        <div>
            <ButtonPropsType title={"All"} />
            <ButtonPropsType title={"Active"} />
            <ButtonPropsType title={"Completed"} />
        </div>
    </div>
    )
}
export default Todolist;