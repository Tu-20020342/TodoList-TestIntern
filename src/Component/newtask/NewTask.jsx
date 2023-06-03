import React, { useState } from 'react';
import './NewTask.css'
import DescriptionTask from '../descriptionTask/DescriptionTask';
import { v4 as uuidv4 } from 'uuid';

const NewTask = (props) => {

  // const taskList = props.taskList
  // const setTaskList = props.setTaskList

  const [task, setTask] = useState({
    taskTitle: '',
    taskDescription: '',
    taskDuedate: '',
    taskPriority: 'Low',
  })

  const handleTitleChange = (event) => {
    setTask({ ...task, taskTitle: event.target.value });
  }

  const handleAddTask = () => {
    // Kiểm tra xem trường tiêu đề công việc có được nhập hay không
    if (!task.taskTitle) {
      const errorLog = document.querySelector('.error-log')
      errorLog.classList.add('active')
    } else {
      const newTask = {
        taskTitle: task.taskTitle,
        taskDescription: task.taskDescription,
        taskDuedate: task.taskDuedate,
        taskPriority: task.taskPriority,
        taskID: uuidv4(),
      };
      props.setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      setTask({
        taskTitle: '',
        taskDescription: '',
        taskDuedate: '',
        taskPriority: 'Low',
      });
    }
    // console.log(task);
  }

  return (
    <div id='task-container'>
      <h1 className='title-newtask'>New Task</h1>
      <input
        className='task-input'
        placeholder='Add new task...'
        value={task.taskTitle}
        onChange={handleTitleChange}
        required
      />
      <div className='error-log'>
        <span>
          This field is require
        </span>
      </div>
      <DescriptionTask
        task={task}
        setTask={setTask}
      />
      <button
        className="task-button"
        onClick={(e) => handleAddTask(e)}
      >Add</button>
    </div>
  );
}

export default NewTask;