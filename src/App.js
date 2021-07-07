import React,{useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';




function App() {

  const[inputText, setInputText] = useState('');
  const[todos, setTodos]= useState([]);




  return (
    <div className="App">
      <header>JOT IT DOWN</header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
