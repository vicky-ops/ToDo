import React from 'react';

// shape of the data 
interface TodoItemProps{
    todo:{
        id:number;
        text:string;
        completed:boolean;
    };

    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;

}


const TodoItem: React.FC<TodoItemProps>=({todo,toggleTodo,deleteTodo}) => {
    return(
        <li>
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={()=>toggleTodo(todo.id)}>
                {todo.completed ? 'Undo' : 'Completed'}
            </button>
        </li>
    )
}