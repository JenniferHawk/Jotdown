import React from 'react';

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
        <div className="todo-box">
          <li className="todo-task">{text}</li>
          <button onClick={checkHandler} className="check-btn"><i className="fas fa-check"></i></button>
          <button onClick={deleteHandler} className="delete-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}
export default Todo;