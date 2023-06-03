import React from 'react';
// import { useEffect } from 'react'
import './DescriptionTask.css'

const DescriptionTask = ({ task, setTask }) => {

  const handleDescriptionChange = (event) => {
    setTask({
      ...task,
      taskDescription: event.target.value,
    })
  }

  const handleDueDateChange = (event) => {
    const selectedDate = event.target.value;
    // Kiểm tra xem ngày đến hạn có hợp lệ hay không
    const currentDate = new Date().toISOString().split('T')[0];
    if (selectedDate < currentDate) {
      const errorLog = document.querySelector('.error-log')
      errorLog.classList.add('active')
    } else {
      setTask({ ...task, taskDuedate: selectedDate });
    }
  }

  const handlePriorityChange = (event) => {
    setTask({ ...task, taskPriority: event.target.value });
  }

  // useEffect(() => {
  //   console.log(task, 'jgjhgjh ');
  // }, [])

  return (
    <div className='des-container'>
      <div className="task-box">
        <div className="description">
          <p>Description</p>
          <textarea
            name="taskDescription"
            id="taskDescription-input"
            cols="30"
            rows="10"
            value={task?.taskDescription}
            onChange={handleDescriptionChange}
          >
          </textarea>
        </div>
        <div className="task-info">
          <div className="task-due-date">
            <p className='input-date'>Due Date</p>
            <input
              type="date"
              value={task?.taskDuedate}
              onChange={handleDueDateChange}
            />
          </div>
          <div className="task-priority">
            <p className='input-title'>Priority</p>
            <select
              className='task-options'
              onChange={handlePriorityChange}
            >
              <option value="High">High</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionTask;