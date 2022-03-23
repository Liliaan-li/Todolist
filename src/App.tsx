import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    title: string
    isDone: boolean
    id: string
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    console.log(v1())
    //BLL:
    const todoListTitle_1: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all")
    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }
    const changeFilter = (filter: FilterValuesType) =>{
        setFilter(filter)
    }
    const changeStatus = (id:string, isDone:boolean) =>{
        setTasks(tasks.map(t=> t.id === id ?{...t, isDone:isDone} : t))
    }

    let tasksForTodoList;
    switch (filter) {
        case "active":
            tasksForTodoList = tasks.filter(t => t.isDone === false)
            break;
        case "completed" :
            tasksForTodoList = tasks.filter(t => t.isDone === true)
            break
        default:
            tasksForTodoList = tasks
    }
    //UI:
    return (
        <div className="App">
            <Todolist title={todoListTitle_1}
                      tasks={tasksForTodoList}
                      filter={filter}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeFilter={changeFilter}
                      changeStatus={changeStatus}
            />
        </div>
    );
}

export default App;
