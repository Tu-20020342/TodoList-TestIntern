import React from 'react';
import { useState } from 'react';
import NewTask from '../Component/newtask/NewTask';
import ToDoList from '../Component/todoList/ToDoList';
import './TodoListPages.css'

const TodoListPages = () => {

  const [taskList, setTaskList] = useState([])

  return (
    <div id='pages-container'>
      <NewTask taskList={taskList} setTaskList={setTaskList}/>
      <ToDoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default TodoListPages;