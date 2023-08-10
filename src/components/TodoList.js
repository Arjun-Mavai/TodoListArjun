import React from 'react';
import TodoItem from './TodoItem';
 
function TodoList({ todos, completeTodo, deleteTodo , uncompleteTodo , updateTodo  }) {
    return (
        <div  className="flex flex-col items-center justify-center min-h-screen bg-gray-100" >
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    uncompleteTodo={uncompleteTodo}
                    updateTodo ={updateTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
