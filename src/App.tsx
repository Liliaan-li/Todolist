import React from 'react';
import './App.css';
import Todolist from "./Todolist";
export type TaskType ={
    title: string
    isDone: boolean
    id: number
}
function App() {
    //BLL:
    const todoListTitle_1: string ="What to learn"
    const todoListTitle_2: string ="What to buy"
    const todoListTitle_3: string ="What to eat"
    const tasks: Array<TaskType>=[
        {id:1, title:"HTML&CSS", isDone: true},
        {id:2, title:"JS/ES6", isDone: true},
        {id:3, title:"React", isDone: false},
    ]
    //UI:
    return (
        <div className="App">
          <Todolist title ={todoListTitle_1} tasks={tasks}/>
          <Todolist title ={todoListTitle_2} tasks={tasks}/>
          <Todolist title ={todoListTitle_3} tasks={tasks}/>

        </div>
    );
}

export default App;
