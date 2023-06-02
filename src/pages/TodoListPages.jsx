import React from 'react';
import NewTask from '../Component/newtask/NewTask';
import ToDoList from '../Component/todoList/ToDoList';
import './TodoListPages.css'

const TodoListPages = () => {
  return (
    <div id='pages-container'>
      <NewTask />
      <ToDoList />
    </div>
  );
}

export default TodoListPages;