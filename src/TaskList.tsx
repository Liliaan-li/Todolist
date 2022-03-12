import React, {FC} from 'react';
import {TaskType} from "./App"

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void;
}

export const TaskList: FC<TaskListPropsType> = ({tasks, removeTask}) => {
    // const {tasks} = props //{}
    // const tasks = props.tasks;
    const tasksJSXElement = tasks.map(t => {
        const onClickRemoveTask = () => removeTask(t.id)
        return (<li key={t.id}><input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => {onClickRemoveTask()}}>delete</button>
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