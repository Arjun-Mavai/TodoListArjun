import React, { useState } from 'react';

function TodoInput({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <>
        <div  >
        <form onSubmit={handleSubmit}  >


        <div className="mt-48 bg-sky-500 "  >
    <input value={value} onChange={e => setValue(e.target.value)} className="p-2 border rounded-lg border-2 border-green-600 w-1/4 mx-auto" />
    <button   className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
</div>


{/* <input 
               type="text"
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder="Add a new task"
           />
            <button type="submit">Add</button>  */}


        
        </form>
        </div>
        </>
    );
}

export default TodoInput;





