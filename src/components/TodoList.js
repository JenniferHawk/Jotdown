import React from 'react';
import Todo from './Todo';

const TodoList=({todos, setTodos}) => {
    return(
        <div className="todos-box">
            <div className="todos-list">
                {todos.map((todo)=>(
                    <Todo todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    text={todo.text}
                 />
                ))}
            </div>
        </div>
    );
}

export default TodoList;