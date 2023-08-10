import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = [...todos , {text}];
        setTodos(newTodo)
    }

    // const addTodo = (text) => {
    //     const newTodos = [...todos, { text }];
    //     setTodos(newTodos);
    // };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const uncompleteTodo = (index) =>  {
        const newTodos = [...todos];
        newTodos[index].isCompleted = false;
        setTodos(newTodos);

    };

    const deleteTodo = (index) => {
       const newTodos  = [...todos];
       newTodos.splice(index , 1);
       setTodos(newTodos);
    };

    const updateTodo = (index , newValue) => {
      const newTodos   = [...todos];
      newTodos[index].text = newValue;
      setTodos(newTodos);
    }

    // const deleteTodo = (index) => {
    //     const newTodos = [...todos];
    //     newTodos.splice(index, 1);
    //     setTodos(newTodos);
    // };

    return (
        <div className="App">
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} uncompleteTodo ={uncompleteTodo} updateTodo = {updateTodo} />
        </div>
    );
}

export default App;
