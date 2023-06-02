import React from 'react';
import './TodoList.css'
import DescriptionTask from '../descriptionTask/DescriptionTask';
import './TodoList.css'
import TaskItems from '../taskItems/TaskItems';

const ToDoList = () => {
  return (
    <div id='todo-container'>
      <h1 className='title-newtask'>Todo List</h1>
      <input className='task-input' placeholder='Search...' />
      <TaskItems />
      <div className="item-container">
        <input className='task-input' placeholder='Do homework' />
        <DescriptionTask />
        <button className="task-button">Update</button>
      </div>
      <div className='bulk-action'>
        <span>Bulk Action:</span>
        <div className="btn">
          <button className='done-btn'>Done</button>
          <button className='remove-btn'>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;