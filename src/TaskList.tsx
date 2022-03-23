import React, {FC} from 'react';
import {TaskType} from "./App"
import Button from "./Button";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeStatus: (id:string, isDone:boolean) => void
}

export const TaskList: FC<TaskListPropsType> = ({tasks, removeTask, changeStatus}) => {
    const tasksJSXElement = tasks.map(t => {
        const onClickRemoveTask = () => removeTask(t.id)
        return (
            <li key={t.id} className={t.isDone? "isDone": ""}>
                <input type="checkbox" checked={t.isDone} onChange={(e)=>changeStatus(t.id, e.currentTarget.checked)}/>
                <span>{t.title}</span>
                <Button title={"x"} onClickHandler={onClickRemoveTask}/>
            </li>
        )
    })
    return (
        <ul>
            {tasksJSXElement}
        </ul>

    );
};

export default TaskList;