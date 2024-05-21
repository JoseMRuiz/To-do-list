import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Formulario from './components/Formulario';
import Todos from './components/Todos';

const initialStateTodos = [
  {
    id:1,
    title: "Todo #01",
    description: "Descripción #01",
    state: false,
    priority: false,
  },
  {
    id:2,
    title: "Todo #02",
    description: "Descripción #02",
    state: true,
    priority: true,
  },
  {
    id:3,
    title: "Todo #03",
    description: "Descripción #03",
    state: false,
    priority: true,
  },
]

const App = () => {

  const[ todos,setTodos ] = useState(initialStateTodos)

  const addTodo = todo => {
    setTodos([...todos,todo])
  };

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)

    setTodos(newArray)
  }

  return (
    <>
      <div className='container mb-2'>
          <h1 className='my-5'>Formularios</h1>   
          <Formulario addTodo = {addTodo} />
          <Todos todos = {todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default App;