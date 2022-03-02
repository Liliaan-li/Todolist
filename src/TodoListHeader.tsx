import React from 'react';
type ToDoListHeader = {
    title: string;
}
const TodoListHeader = (props:ToDoListHeader) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default TodoListHeader;