import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList=({todos, setTodos}) => {
    return(
        <div className={`${styles.todos_box}`}>
            <div className={`${styles.todo_task}`}>
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