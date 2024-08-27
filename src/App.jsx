import { useCallback, useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todolist from './components/Todolist'
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([
    {
      todo: "Reaading books",
      id: Date.now(),
      completed: false
    }
  ])

  const handleAddtodo = useCallback(() => {
    const todoArr = [...todos, {
      todo,
      id: Date.now(),
      completed: false
    }]
    setTodos([...todoArr])
    setTodo("")

  }, [todo])

  const handleOndelete = useCallback((id) => {
    const filterTodo = todos.filter((data) => data.id !== id);
    setTodos([...filterTodo])
  }, [todos])

  return (
    <>
      <div className='flex justify-center items-center mt-8 flex-col gap-3'>
        <Addtodo onClick={handleAddtodo} onChange={(e) => {
          setTodo(e.target.value);
        }} value={todo} />
        <Todolist Todos={todos} onDelete={handleOndelete} />
      </div>
    </>
  )
}

export default App

