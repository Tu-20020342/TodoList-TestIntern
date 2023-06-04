import React, { useState, useEffect } from 'react';
import NewTask from '../Component/newtask/NewTask';
import ToDoList from '../Component/todoList/ToDoList';
import './TodoListPages.css'

const TODO_APP_STORAGE_KEY = 'TODO_APP'

const TodoListPages = () => {

  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const storagedTaskList = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if (storagedTaskList) {
      setTaskList(JSON.parse(storagedTaskList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(taskList))
  }, [taskList])

  return (
    <div id='pages-container'>
      <NewTask setTaskList={setTaskList} />
      <ToDoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default TodoListPages;