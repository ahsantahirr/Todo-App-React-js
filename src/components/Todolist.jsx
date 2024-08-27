import React from 'react'

function Todolist({ Todos, onDelete}) {
    return (
        <>
            {Todos.map((todo, ind) => (
                <div className='w-96  bg-violet-500 flex ' key={todo.id}>
                    <div className='h-16 w-96 bg-violet-500 flex items-center p-2 rounded-lg text-white font-bold'>{todo.todo}</div>
                    <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl text-white p-2 font-bold" onClick={() => onDelete(todo.id)}>
                        Delete
                    </button>
                </div>
            ))}

        </>
    )
}

export default Todolist

