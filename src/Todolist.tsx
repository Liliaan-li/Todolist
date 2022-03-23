import React, {useState} from "react";
import {FilterValuesType, TaskType} from "./App"
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TaskList from "./TaskList";

type List = {
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValuesType) => void
    changeStatus: (id:string, isDone:boolean) => void
}

const Todolist = (props: List) => {
    const [title, setTitle] = useState<string>("")
    const[error, setError] = useState<boolean>(false)
    const addTask = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle){
            props.addTask(trimmedTitle)
        } else{
            setError(true)
        }
        setTitle('')
    }
    // const onKeyPressAddTask
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input className={error? "error": ""}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value)
                        setError(false)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addTask()
                        }
                    }
                    }/>
                <Button title={"+"} onClickHandler={addTask}/>
                {error && <div className={"error-message"}>Title is required</div>}
            </div>
            <TaskList tasks={props.tasks}
                      removeTask={props.removeTask}
                      changeStatus={props.changeStatus}
            />
            <div>
                <Button btnClass={props.filter === "all"?"btn-active":""} onClickHandler={()=>props.changeFilter("all")} title={"All"}/>
                <Button btnClass={props.filter === "active"?"btn-active":""} onClickHandler={ ()=>props.changeFilter("active")}title={"Active"}/>
                <Button btnClass={props.filter === "completed"?"btn-active":""} onClickHandler={ ()=>props.changeFilter("completed")}title={"Completed"}/>
            </div>
        </div>
    )
    function UsersList() {
        const results = useState<string[]>(["Bob", "Alex", "Ann"])
        const users = results[0]
        const setUsers = results[1]

        return (
            console.log(typeof useState)

        )
    }

}
export default Todolist;