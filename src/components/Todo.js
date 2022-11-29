import React from 'react';
import {BsFileEarmarkXFill} from "react-icons/bs";
import {BsFillFileEarmarkCheckFill} from "react-icons/bs";

export default function Todo({ todos, completedTask, removeTask }) {
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "complete rounded-lg " : "task-div rounded-lg bg-indigo-800"} key={index} >
        <div className="todo">{todo.text}</div>
        <div className="icons flex text-lg cursor-pointer " key={todo.id}>
          <BsFillFileEarmarkCheckFill className={todo.isComplete ? 'hide' : 'check'}  onClick={()=>{completedTask(todo.id)}}></BsFillFileEarmarkCheckFill>
          <BsFileEarmarkXFill classname='close' onClick={()=>{removeTask(todo.id)}}></BsFileEarmarkXFill>
        </div>
    </div>
  ))
}
