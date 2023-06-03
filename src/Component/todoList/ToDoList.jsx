import React from 'react';
import './TodoList.css'
import DetailTask from '../detailTask/DetailTask';

const ToDoList = (props) => {

  const handleUpdateTask = (taskDetail) => {
    const newTaskList = props.taskList.map((item) => {
      if (item?.taskID === taskDetail.taskID) {
        return {
          ...item,
          taskTitle: taskDetail.taskTitle,
          taskDescription: taskDetail.taskDescription,
          taskDuedate: taskDetail.taskDuedate,
          taskPriority: taskDetail.taskPriority,
        }
      }
      return item;
    })
    props.setTaskList(newTaskList);
  }

  const handleRemoveTask = (taskID) => {
    const filtered = props.taskList.filter((e) => {
      return e.taskID != taskID
    });
    props.setTaskList(filtered)
  }

  return (
    <div id='todo-container'>
      <h1 className='title-newtask'>Todo List</h1>
      <input
        className='task-input'
        placeholder='Search...'
      />
      {props.taskList.map((task, index) => (
        <div key={index}>
          <DetailTask
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
          />
        </div>
      ))}
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