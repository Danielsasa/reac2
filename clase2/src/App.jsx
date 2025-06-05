import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoitem'

function App () {
  /* 1. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 4. Creo un estado para guardar las tareas */
  const [tasks, setTasks] = useState([])
  /* 3. Creo una función que se ejecuta cuando se hace clic a agregar */
  const handleAdd = () => {
    // console.log('Añadir tarea:', inputValue)
    setTasks([...tasks, inputValue])
    setInputValue('') // Limpiar el input después de añadir la tarea
  }
  /* 5. Creo una función que se ejecuta cuando se hace clic a eliminar */
  const deleteTodo = (index) => {
    // console.log('Eliminar tarea en el índice:', index)
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <>
      <h1>Lista de Despensa</h1>
      {/* 2. Usar un evento onChange para guardar la información del estado, apenas esta sea tecleada */}
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Añadir</button>
      {/* ul>li{Item $}*3>button{Eliminar} */}
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            todoName={task}
            handleDelete={() => deleteTodo(index)}
            key={index} // Usar el índice como clave, aunque no es lo ideal en producción
          />
        ))}
      </ul>
    </>
  )
}

export default App
