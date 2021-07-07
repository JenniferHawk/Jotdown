import React from 'react';
import font from './Todo.module.css';
const Todo =({todos, setTodos, todo, text}) => {

    const checkHandler=()=>{
        setTodos(todos.map(element => {
            if(element.id === todo.id){
                return{
                    ...element, completed:!element.completed
                }
            }
            return element;
        })
        )
    }
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id));
    }

    return(
        <div className={`${font.todo}`}>
          <li className={`todo_list ${font.todo_list.completed ? "completed":""}`}>{text}</li>
          <button onClick={checkHandler} className={`${font.check_btn}`}><i className="fas fa-check"></i></button>
          <button onClick={deleteHandler} className={`${font.delete_btn}`}><i className="fas fa-trash"></i></button>
        </div>
    );
}
export default Todo;