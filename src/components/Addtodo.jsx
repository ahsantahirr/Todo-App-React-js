import React from 'react'

function Addtodo({onChange,onClick,value}) {
    return (
        <div className='flex justify-center items-center mt-8'>
            <textarea type="text" className="rounded-full p-1 border w-56 place-content-center" placeholder='Enter your task Todo'  onChange={onChange} value={value}/>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full text-white p-3 font-bold" onClick={onClick}
           disabled={value==""}>
                Add ToDO
            </button>
        </div>
    )
}

export default Addtodo