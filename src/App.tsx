import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

export type TaskType = {
    title: string
    isDone: boolean
    id: number
}

function App() {
    //BLL:
    const todoListTitle_1: string = "What to learn"
    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ])

    const  removeTask = (id: number) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    //UI:
    return (
        <div className="App">
            <Todolist title={todoListTitle_1} tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
