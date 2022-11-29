import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


export const TodoList = () => {

  const [todos, setTodos] = useState([])
  const addTask = task => {
    if(!task.text){
      return
    }
    const newTodos=[task, ...todos];
    setTodos(newTodos);
  }

  const removeTask = id => {
    let updatedTasks=[...todos].filter(task=>task.id !== id)
    setTodos(updatedTasks);
  }

  const completedTask = id => {
    let updatedTasks= todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = true;
      }
      return todo;
    })
    setTodos(updatedTasks);
  }
  return (
    <div className=" List flex flex-col text-white pb-4 items-center my-20 mx-auto w-96 rounded-2xl bg-black border-2 border-black ">
        <h1 className=" mt-4 text-2xl hover:text-indigo-500 " >My Task List</h1>
        
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completedTask={completedTask} removeTask={removeTask} ></Todo>
    </div>
  )
}