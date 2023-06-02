import React from 'react';
import './NewTask.css'
import DescriptionTask from '../descriptionTask/DescriptionTask';

const NewTask = () => {
  return (
    <div id='task-container'>
        <h1 className='title-newtask'>New Task</h1>
        <input className='task-input' placeholder='Add new task...' />
        <DescriptionTask />
        <button className="task-button">Add</button>
    </div>
  );
}

export default NewTask;