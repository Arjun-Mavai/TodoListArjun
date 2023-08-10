import React, { useState } from 'react';

function TodoItem({ todo, index, completeTodo, deleteTodo , uncompleteTodo,updateTodo }) {
 const [newValue , setNewValue] = useState('');
 const [isEditing , setIsEditing] = useState(false);

function handleUpdate(){
    updateTodo(index , newValue);
    setIsEditing(false);

}



 if (isEditing) {
    return (
        <div>
            <input className="p-2 border rounded-lg border-2 border-green-600 w-1/4 mx-auto" 
                type="text"
                value={newValue}
                onChange={e => setNewValue(e.target.value)}
            />
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow">Update</button>
            <button onClick={() => setIsEditing(false)} className="bg-pink-400 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full shadow">Cancel</button>
        </div>
    );
}



    return (
        <div className="flex items-center bg-white p-4 rounded-md shadow-sm mb-2">
            <span   className="p-2 border rounded-lg border-2 border-green-600 w-1/4 mx-auto" 
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
                {todo.text}
            </span>
             
            <button onClick={() => completeTodo(index)} className="bg-blue-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow" >Complete</button>
            <button onClick={() => uncompleteTodo(index)}    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow">uncheck</button>
            <button onClick={() => {setIsEditing(true)}}    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow">Edit</button>

           
            <button onClick={() => deleteTodo(index)} className="bg-yellow-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full shadow" >Delete</button>

        </div>
    );
}

export default TodoItem;
