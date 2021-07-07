import React from 'react';
import styles from './Form.module.css';

const Form =({setInputText, inputText, todos, setTodos }) =>{

    const InputTextHandler =(e) => {
        setInputText(e.target.value);
    };
    const submitHandler =(e)=>{
        e.preventDefault();
        setTodos([
               ...todos, {text:inputText, completed: false, id: Math.random()*1000}
       ]);
        setInputText("");
    };



    return(
        <form>
            <input value={inputText} onChange={InputTextHandler} className="input-box" type="text" />
            <button onClick={submitHandler} className="sumbit-btn" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}

export default Form;